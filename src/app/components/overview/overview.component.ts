import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Batch } from '../../model/Batch';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { Curriculum } from '../../model/Curriculum';
import { Trainer } from '../../model/Trainer';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { BuildingControllerService } from '../../services/api/building-controller/building-controller.service';
import { RoomControllerService } from '../../services/api/room-controller/room-controller.service';
import { Building } from '../../model/Building';
import { Room } from '../../model/Room';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  // ----------------------- NEW CODE FROM NEW HOPE -----------------------------------
  selectedFilter: number;
  panelTitle = 'Loading...';
  isLoading: boolean;
  batchList: any[] = [];
  curriculumList: Curriculum[];
  trainerList: Trainer[];
  addressList: any[] = [];
  roomsList: Room[] = [];
  displayedBatchList: any[];
  displayedColumns = [
    'name',
    'curriculum',
    'trainer',
    'location',
    'building',
    'room',
    'startDate',
    'endDate',
    'progress'
  ];

  dataSource = new MatTableDataSource(this.displayedBatchList);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private batchController: BatchControllerService,
    private curriculumServce: CurriculumControllerService,
    private trainerService: TrainerControllerService,
    private addressService: AddressControllerService,
    private buildingService: BuildingControllerService,
    private roomService: RoomControllerService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.curriculumServce
      .findAll()
      .toPromise()
      .then(cList => {
        this.curriculumList = cList;
        this.curriculumList.sort((a, b) => a.id - b.id);
      });

    this.trainerService
      .findAll()
      .toPromise()
      .then(tList => {
        this.trainerList = tList;
        this.trainerList.sort((a, b) => a.id - b.id);
      });

    this.addressService
      .findAll()
      .toPromise()
      .then(lList => {
        this.addressList = lList;
        this.addressList.sort((a, b) => a.id - b.id);
        this.buildingService
          .findAll()
          .toPromise()
          .then(bdList => {
            bdList.sort((a, b) => a.id - b.id);
            this.addressList.forEach((address: any) => {
              const buildings = bdList.filter((building: Building) => address.id === building.address);
              address.buildings = buildings || [];
            });

            this.roomService
              .findAll()
              .toPromise()
              .then(rList => {
                this.roomsList = rList;
                this.roomsList.sort((a,b) => a.id - b.id);
              });
          });
      });

    // ------- Populating batch list data --------
    this.batchController
      .findAll()
      .toPromise()
      .then(blist => {
        this.batchList = blist;
        this.batchList.forEach(b => (b.progress = this.getCurrentProgress(b)));
        this.applyFilter(0);
        this.isLoading = false;

        if (this.batchList.length < 1) {
          this.isLoading = false;
          this.panelTitle = 'All Batches';
        }
      })
      .catch(error => {
        this.isLoading = false;
        this.panelTitle = 'Could Not Load Batches';
        console.log(error);
      });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // -------------------------------- PREVIOUS BATCH'S METHODS -------------------------------------------
  exportToCSV(evt) {
    evt.stopPropagation();
    // this.csvService.download(this.dataSource, 'Batches');
    const angular2Csv = new Angular2Csv(this.displayedBatchList, 'batches');
  }

  openMenu(evt) {
    evt.stopPropagation();
  }
  // --------------------------------- END OF THE OLD -----------------------------------------------------

  // ----------------------------------BEGIN OPERATION NEW HOPE -------------------------------------------
  applyFilter(filterType: number) {
    /**
     *  FILTER TYPE!!!
     *  0 - By All
     *  1 - In Progress
     *  2 - Beginning in two weeks
     */
    this.selectedFilter = filterType;
    this.displayedBatchList = [];
    if (filterType === 0) {
      this.displayedBatchList = this.batchList;
      this.panelTitle = 'All Batches';
    } else if (filterType === 1) {
      this.batchList.forEach(batchObj => {
        if (batchObj.progress > 0 && batchObj.progress < 100) {
          this.displayedBatchList.push(batchObj);
        }
      });

      if (this.displayedBatchList.length < 1) {
        this.panelTitle = 'No Batches In Progress';
      } else {
        this.panelTitle = 'Batches In Progress';
      }
    } else if (filterType === 2) {
      this.batchList.forEach(batchObj => {
        if (batchObj.progress === 0) {
          if (this.getCurrentWeekOfBatch(batchObj.startDate) >= -2) {
            this.displayedBatchList.push(batchObj);
          }
        }
      });

      if (this.displayedBatchList.length < 1) {
        this.panelTitle = 'No Batches Beginning in Two Weeks';
      } else {
        this.panelTitle = 'Batches Beginning within Two Weeks';
      }
    }
    this.dataSource.data = this.displayedBatchList;
  }

  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    // EX: 0-6 DAYS = 1 WEEK
    //     7-13 DAYS = 2 WEEKS
    const startValue = new Date(startDate).valueOf();
    const endValue = new Date(endDate).valueOf();
    if (startValue && endValue) {
      const numberOfDays = Math.abs(<any>startValue - <any>endValue) / (1000 * 60 * 60 * 24);
      const numberOfWeeks = Math.floor(numberOfDays / 7);
      return numberOfWeeks;
    }
    return 0;
  }

  // IF RETURN IS POSITIVE, BATCH HAS STARTED/IS IN SESSION FOR # WEEKS.
  // IF RETURN IS NEGATIVE, BATCH HAS NOT STARTED/WILL START IN # WEEKS.
  getCurrentWeekOfBatch(startDate: number): number {
    const currentDate = new Date(Date.now());
    const startValue = new Date(startDate).valueOf();
    const numberOfDays = (currentDate.valueOf() - startValue) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.floor(numberOfDays / 7);
    return weekNumber;
  }

  // PROGRESS = 0 IF BATCH DIDNT START YET
  // PROGRESS CAPPED AT 100 IF BATCH FINISHED
  getCurrentProgress(batchObj): number {
    const training_duration = this.computeNumOfWeeksBetween(batchObj.startDate, batchObj.endDate);
    if (training_duration === 0) {
      return 100;
    }
    const batch_current_week = this.getCurrentWeekOfBatch(batchObj.startDate);
    if (batch_current_week <= 0) {
      return 0;
    }
    let progress = batch_current_week / training_duration;
    progress = progress * 100;
    if (progress > 100) {
      return 100;
    }
    return progress;
  }
}
