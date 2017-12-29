import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource, MatCheckbox, MatPaginator} from '@angular/material';
import {Batch} from '../domain/batch';
import {FormControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {BatchService} from '../services/batch.service';
import {NotificationService} from '../services/notification.service';
import {CurriculaService} from '../services/curricula.service';
import {TrainerService} from '../services/trainer.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {

  // FAKE VALUES FOR THE FIRST TAB
  startDate: Date;
  endDate: Date;
  datebetween: any;
  creating = true;
  batch: Batch[];

  Curriculums = [
    {value: 'java-0', viewValue: 'JAVA'},
    {value: 'c++-1', viewValue: 'C++'},
    {value: 'angular-2', viewValue: 'ANGULAR 4'}
  ];

  focuses = [
    {value: 'microservices-0', viewValue: 'Microservices'},
    {value: 'focus2-1', viewValue: 'Focus 2'},
    {value: 'focus3-2', viewValue: 'Focus 3'}
  ];

  skills = new FormControl();

  skillsList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  trainers =  [
    {value: 'trainer-0', viewValue: 'August Duet'},
    {value: 'trainer-1', viewValue: 'Emily Higgins'},
    {value: 'trainer-2', viewValue: 'Steven Kelsey'} ];

  // locations = [
  //   {value: 'location-0', viewValue: 'Revature HQ - Reston,VA'},
  //   {value: 'location-1', viewValue: 'CUNY - SPS,NY'}
  // ];
  locations: any[] = [
    {
      'location': 'Reston HQ - Reston, VA',
      'building': [
        {
          'name': 'Douglas  Pace', 'rooms': [{'name': '101'}]
        },
        {
          'name': 'Mcleod  Mueller'
        },
      ]
    },
    {
      'location': 'CUNY - New York, NY',
      'building': [
        {
          'name': 'SPS'
        },
        {
          'name': 'QUEENS COLLEGE'
        }
      ]
    }
  ];

  buildings = [
    {value: 'building-0', viewValue: 'Reston'},
    {value: 'trainer-1', viewValue: 'CSPS'},
    {value: 'trainer-2', viewValue: 'Steven Kelsey'}];
  rooms = [
    {value: 'room-0', viewValue: '201'},
    {value: 'room-1', viewValue: '301'},
  ];


  firstTabHeader = 'Create New Batch';

  //  VALUES FOR THE ALL BATCHES TAB
  BatchData: Batch[];
  batchData = new MatTableDataSource(this.BatchData);
  batchValues = ['Checkbox', 'name', 'curriculumName', 'focusName', 'trainerName', 'location', 'building', 'room', 'startDate', 'endDate', 'Icons'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private batchService: BatchService,
              private curriculaService: CurriculaService,
              private trainerService: TrainerService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit() {
    this.batchData.sort = this.sort;
    this.batchData.paginator = this.paginator;
    this.batchData = new MatTableDataSource(this.BatchData);
  }

  EditBatch() {
    this.firstTabHeader = 'Edit Batch';
  }

  CloneBatch() {
    this.firstTabHeader = 'Clone Batch';
  }

  DeleteBatch() {
  }

  SynchronizeBatch() {
  }

  isAuthorized() {
    return false;
    // get user priviledge and return true if admin , else return false. Result determines if batch creation is available.
  }
  isCreating() {
    return this.creating;
  }
  showToast(message) {
    this.notificationService.openSnackBar(message);
  }
  clickTest(evt) {
    console.log('button clicked');
    this.creating = !this.creating;
    this.showToast('Creating new Batch');
    evt.stopPropagation();
  }
  cancel(evt) {
    this.creating = !this.creating;
    evt.stopPropagation();
  }
  create(evt) {
    // createBatch(). send form with data to micro service for batch creation.
    this.creating = !this.creating;
    evt.stopPropagation();
  }
  setStartDate(evt) {
    console.log(evt.value)
    this.startDate = evt.value;
  }
  calcDate(evt) {
    console.log(evt.value);
    this.endDate = evt.value;
    console.log(this.endDate.getMonth());
    this.datebetween = ((this.endDate)as any - ((this.startDate)as any)) / 1000 / 60 / 60 / 24;
  }

  // error messages
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  // Gets all batches and stores them in variable batchData
  getAll() {
    this.batchService.getAll().subscribe(data => {
      this.BatchData = data;
      for (let entry of this.BatchData) {
        this.curriculaService.getById(entry.curriculum)
          .subscribe(curriculumData => {
            entry.curriculumName = curriculumData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.curriculaService.getById(entry.focus)
          .subscribe(focusData => {
            entry.focusName = focusData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.trainerService.getById(entry.trainer)
          .subscribe(trainerData => {
            entry.trainerName = trainerData.firstName + ' ' + trainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });
        this.trainerService.getById(entry.cotrainer)
          .subscribe(cotrainerData => {
            entry.cotrainerName = cotrainerData.firstName + ' ' + cotrainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });
      }
      this.batchData = new MatTableDataSource(this.BatchData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
  }, error => {
      this.showToast('Failed to fetch Batches');
    });
  }

}

