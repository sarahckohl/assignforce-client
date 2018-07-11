import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation, DoCheck } from '@angular/core';
import { MatSort, MatTableDataSource, MatCheckbox, MatSelect } from '@angular/material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Batch } from '../../model/Batch';
import { Curriculum } from '../../model/Curriculum';
import { Address } from '../../model/Address';

import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { Skill } from '../../model/Skill';
import { Focus } from '../../model/Focus';
import { Trainer } from '../../model/Trainer';
import { Building } from '../../model/Building';
import { Room } from '../../model/Room';
import { BuildingControllerService } from '../../services/api/building-controller/building-controller.service';
import { RoomControllerService } from '../../services/api/room-controller/room-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { AuthService } from '../../services/auth/auth.service';
import { DISABLED } from '@angular/forms/src/model';

export enum BatchMode {
  Create = 1,
  Edit
}

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit, DoCheck {
  //--------------------------------------------------VALUES FOR CREATE BATCHES-------------------------------------
  //Objects for storing batch form data
  batchForm: FormGroup;
  newBatch: Batch;
  skillsList: Skill[] = [];
  focuses: Focus[] = [];
  trainers: Trainer[] = [];
  buildings: Building[] = [];
  rooms: Room[] = [];
  skills: Skill[] = [];
  buildingRooms: Room[] = [];
  selectedLocation = null;
  selectedBuilding = null;
  selectedCurriculum = null;
  selectedFocus = null;
  sortedTrainers: any[] = [];

  //For form select in Create New Batch
  curriculums: Curriculum[] = [];
  locations: Address[] = [];
  buildingsOfALocation: Building[] = [];

  // Autogenerated Batch Form Data
  numOfWeeksBetween = 0;
  genBatchName = '';
  genEndDate;

  currentDate = new Date(Date.now());
  isLoading: boolean;
  firstHeader = 'Loading...';
  // ------------------------------------------------ VARIABLES FOR ALL BATCHES -----------------------------------
  //  COLUMNS FOR THE ALL BATCHES TAB
  batchColumns = [
    'Checkbox',
    'name',
    'curriculum',
    'trainers',
    'location',
    'building',
    'room',
    'startDate',
    'endDate',
    'Icons'
  ];

  allBatches: Batch[];
  dataSource = new MatTableDataSource(this.allBatches);
  secondHeader = 'Loading...';

  BatchMode = BatchMode;
  batchMode: BatchMode = BatchMode.Create;

  batchModel = new Batch();

  constructor(
    private fb: FormBuilder,
    private curriculumService: CurriculumControllerService,
    private addressService: AddressControllerService,
    private trainerService: TrainerControllerService,
    private batchService: BatchControllerService,
    private buildingService: BuildingControllerService,
    private roomService: RoomControllerService,
    private skillsService: SkillControllerService,
    public auth0: AuthService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.isLoading = true;
    // ------------- Populating Data from Services -----------------
    this.curriculumService
      .findAll()
      .toPromise()
      .then(response => {
        this.curriculums = response;
        this.curriculums;
        this.firstHeader = 'Create New Batch';
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        this.firstHeader = 'Create Batch Form Disabled - Content Not Loaded';
        console.log(error);
      });
    this.addressService
      .findAll()
      .toPromise()
      .then(response => {
        this.locations = response;
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      });
    this.trainerService
      .findAll()
      .toPromise()
      .then((response: Trainer[]) => {
        this.trainers = response;
        this.isLoading = false;
      });
    this.batchService
      .findAll()
      .toPromise()
      .then(response => {
        this.allBatches = response;
        this.secondHeader = 'All Batches';
        this.isLoading = false;
        this.dataSource.data = this.allBatches;
      })
      .catch(error => {
        this.isLoading = false;
        this.secondHeader = 'Could Not Load Batches';
        console.log(error);
      });
    this.buildingService
      .findAll()
      .toPromise()
      .then(response => {
        this.buildings = response;
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      });
    this.roomService
      .findAll()
      .toPromise()
      .then(response => {
        this.rooms = response;
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      });

    this.skillsService
      .findAll()
      .toPromise()
      .then(response => {
        this.skills = response;
        this.isLoading = false;
      });

    // ------------ Batch Form Validation --------------
    this.batchForm = this.fb.group({
      curriculum: [null, Validators.required],
      skills: [[]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      batchName: [null],
      trainer: [null],
      cotrainer: [null],
      location: [null],
      building: [null],
      room: [null]
    });

    // ----- Observable for form changes in Create Batches panel ------
    this.batchForm.valueChanges.subscribe(data => {
      const startDate = data.startDate;
      const endDate = new Date(data.endDate).getTime();
      const curriculum = this.curriculums.find(c => c.id === data.curriculum);
      if (this.batchMode === BatchMode.Create) {
        this.batchModel.name = this.createBatchName(curriculum, null, startDate);
        if (startDate) {
          if (!this.endDateIsSet()) {
            this.batchModel.endDate = <any>this.computeDefaultEndDate(startDate);
          }
          this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, this.batchModel.endDate);
        }
      } else if (this.batchMode === BatchMode.Edit) {
        if (startDate) {
          this.batchModel.name = this.createBatchName(curriculum, null, startDate);
          this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, endDate);
        }
      }
    });
  }

  ngDoCheck() {
    // ------- Checking if a form field has a selected value on Create Batch form -------
    // ------- Populating Subsequent fields based on selection ---------

    // Checking if Location has been selected, if so, populate buildings
    if (this.batchModel.address && this.selectedLocation !== this.batchModel.address) {
      this.selectedLocation = this.batchModel.address;
      this.buildings.forEach(building => {
        if (building.address && building.address === this.batchModel.address) {
          this.buildingsOfALocation.push(building);
        }
      });
    }

    // Checking if Building has been selected, if so, populate rooms
    if (this.batchModel.building && this.batchModel.building !== this.selectedBuilding) {
      this.selectedBuilding = this.batchModel.building;
      this.buildingRooms = this.rooms.filter(rm => rm.building === this.selectedBuilding.id);
    }

    // Checking if Curriculum has been selected, if so, populate focuses and skills
    if (
      this.batchModel.curriculum &&
      this.batchModel.curriculum !== this.selectedCurriculum &&
      this.batchMode !== BatchMode.Edit
    ) {
      this.selectedCurriculum = this.batchModel.curriculum;
      this.batchModel.skills = <any>this.selectSkills(this.batchModel.curriculum);
      this.sortTrainers();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  entityLookup(entityContainerName: string, entityId: number) {
    return this[entityContainerName].find(e => e.id === entityId);
  }

  sortTrainers() {
    const curr = this.curriculums.find(c => c.id === this.selectedCurriculum);
    let skillsMapping = 0;
    let skillsMatch = [];
    this.trainers.forEach(trainer => {
      if (!trainer.active) {
        return;
      }
      skillsMatch = trainer.skills.filter(tSkill => curr.skills.findIndex(cSkill => tSkill === cSkill) >= 0);
      skillsMapping = Math.floor((skillsMatch.length / curr.skills.length) * 100);
      const t = <any>Object.assign({}, trainer);
      t.skillsMapping = skillsMapping;
      this.sortedTrainers.push(t);
    });
    this.sortedTrainers.sort((a, b) => b.skillsMapping - a.skillsMapping);
    console.log(this.sortedTrainers);
    return null;
  }

  // ------ Create a new batch using provided valid form data ------
  onSubmit() {
    if (this.batchMode === BatchMode.Create) {
      this.batchModel.id = 0;
      this.batchService
        .create(this.batchModel)
        .toPromise()
        .then(b => {
          // tslint:disable-next-line:no-unused-expression
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.batchMode === BatchMode.Edit) {
      this.batchService
        .update(this.batchModel)
        .toPromise()
        .then(b => {
          // tslint:disable-next-line:no-unused-expression
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // --------------------------------- Methods for auto generating form values -------------------------------------
  //Calculate number of weeks between two dates
  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    const startValue = new Date(startDate).valueOf();
    const endValue = new Date(endDate).valueOf();
    if (startValue && endValue) {
      const numberOfDays = Math.abs(<any>startValue - <any>endValue) / (1000 * 60 * 60 * 24);
      const numberOfWeeks = Math.floor(numberOfDays / 7);
      return numberOfWeeks;
    }
    return 0;
  }

  //Calculate the Date of Ten weeks later from start date
  computeDefaultEndDate(startDate: number): Date {
    const dateValue = new Date(startDate);
    if (dateValue) {
      const tenWeeks = 1000 * 60 * 60 * 24 * 7 * 10 + 1000 * 60 * 60 * 24 * 4;
      return new Date(dateValue.valueOf() + tenWeeks);
    }
  }

  //Generate Batch Name based on curriculum and/or focus and start date
  createBatchName(curriculum: Curriculum, focus: Focus, startDate: number): string {
    if (curriculum && startDate) {
      const date = new Date(startDate);
      const year = date
        .getFullYear()
        .toString()
        .substr(-2);
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();
      const monthName = date.toLocaleString('en-us', { month: 'short' });

      if (date.getDate() < 10) {
        day = '0' + day;
      }
      if (date.getMonth() < 10) {
        month = '0' + month;
      }
      if (focus) {
        return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum.name + ' ' + focus.name;
      }
      return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum.name;
    }
    return '';
  }

  selectSkills(currId: number): number[] {
    const curriculum = this.curriculums.find((c: Curriculum) => c.id === currId);
    return this.skills.filter(skill => curriculum.skills.includes(skill.id)).map(skill => skill.id);
  }

  // -------------------------------------------- End auto generate methods -----------------------------------------

  // --------------------------------------- Begin Methods for All Batches Panel ------------------------------------
  editBatch(batch: Batch) {
    console.log(batch);
    this.batchMode = BatchMode.Edit;
    this.firstHeader = 'Edit Batch';
    this.batchModel = Object.assign({}, batch);
    this.batchForm.clearValidators();
    this.batchForm.markAsDirty();
  }

  cloneBatch() {
    //TODO
  }

  deleteBatch(batch: Batch) {
    this.batchService.remove(batch.id);
    location.reload();
  }

  endDateIsSet(): boolean {
    return this.batchModel.endDate ? true : false;
  }

  // ---------------------------------------- End Methods for All Batches Panel -------------------------------------
}