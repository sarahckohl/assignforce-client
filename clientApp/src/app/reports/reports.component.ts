import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Angular2Csv} from 'angular2-csv';
import {BatchService} from '../services/batch.service';
import {CurriculaService} from '../services/curricula.service';
import {NotificationService} from '../services/notification.service';
import {Curriculum} from '../domain/curriculum';
import {Batch, BatchLocation} from '../domain/batch';
import {Trainer} from '../domain/trainer';
import {TrainerService} from '../services/trainer.service';
import {ReplogicService} from '../replogic.service';
import {Chart} from 'angular-highcharts';
import {SettingsService} from '../services/global-settings.service';
import {GlobalSettings} from '../domain/global-settings';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  curricula: Curriculum[] = [];
  batch: Batch[] = [];
  trainer: Trainer[] = [];
  // remove = [];
  setting: GlobalSettings[] = [];
  reportGrads = 13;
  reportIncomingGrads = 18;

  newBatch: any = {};
  defaultLocation: any = {};
  // for creating new projection
  cardArr = [];
  // use for getting the current date, and calculation of the hire date
  monthList = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  gradYear = new Date().getFullYear();
  incomeYear = new Date().getFullYear();
  hireDate = new Date();
  startDate = new Date();
  // Use to calculate the total number in the card array
  totalNetBatch = 0;
  totalSDETBatch = 0;
  totalJavaBatch = 0;
  totalSalesforceBatch = 0;
  totalBigDataBatch = 0;
  totalCumulativeBatch = 0;
  // for table


  errMsg = '';

  // for curriculum selection
  curriculaControl = new FormControl('', [Validators.required]);

  @ViewChild(MatSort) sort: MatSort;
  constructor(public skills: ReplogicService, private ref: ChangeDetectorRef, private settingService: SettingsService,
              private batchService: BatchService, private curriculaService: CurriculaService,
              private trainerService: TrainerService, private notificationService: NotificationService) {
    this.getAllCurriculum();
    this.getAllBatches();
    this.getAllTrainer();
    this.getDefaultSetting();
  }
  displayedColumns = ['Ciriculam', 'jan', 'febuaray', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'];
  dataSource = new MatTableDataSource(this.skills.getElement());
  chart = new Chart({
      chart: {
        type: 'column',
        width: 1875,
        backgroundColor: 'charcoal',
      },
      title: {
        text: 'Graduate Summary'
      },
      credits: {
        enabled: false
      },

      yAxis: {
        min: 0,
        max: 160,

        title: {
          text: 'Skills',
        }
      },
      xAxis: {
        crosshair: true,
        categories: [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' ,
          'August' , 'September' , 'October' , 'November', 'December']

      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: ' +
        '<b>\'<td style="text-align-: right"><b><span style="color: whitesmoke">{point.y}</b> <br/>',
        backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'purple',
        shared: true,


      },
      plotOptions: {
        column : {
          stacking : 'perce',
          pointWidth: 9,
          pointPadding: 0.2,

        }},
      series: this.skills.getList()
      ,
    }
  );
  Trainer = new Chart({
      chart: {
        type: 'column',
        width: 1875,
        backgroundColor: 'charcoal',
      },
      title: {
        text: 'Graduate Summary'
      },
      credits: {
        enabled: false
      },

      yAxis: {
        min: 0,
        max: 160,

        title: {
          text: 'Skills',
        }
      },
      xAxis: {
        crosshair: true,
        categories: [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' ,
          'August' , 'September' , 'October' , 'November', 'December']

      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: ' + '' + '' +
        '<b>\'<td style="text-align-: right"><b><span style="color: whitesmoke">{point.y}</b> <br/>',
        backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'purple',
        shared: true,
      },
      plotOptions: {
        column : {
          stacking : 'perce',
          pointWidth: 9,
          pointPadding: 0.2,
        }},
      series: this.skills.getList(),
    }
  );


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewChecked() {
    this.ref.detectChanges();
  }
  // error message
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }
  // get default setting
  getDefaultSetting() {
    this.settingService.getSettings().subscribe(
      setting => {
        this.setting = setting;
        this.reportIncomingGrads = this.setting[0].reportIncomingGrads;
        this.reportGrads = this.setting[0].reportGrads;
        console.log(this.setting);
      }, err => console.log(err)
    );
  }
  // get all batches
  getAllBatches() {
    this.batchService.getAll().subscribe(batch => {
      this.batch = batch;
      for (const x of Object.keys(this.batch)) {
        this.batch[x].startDate = new Date(this.batch[x].startDate);
        this.batch[x].endDate = new Date(this.batch[x].endDate);
      }
      // console.log(new Date(this.batch[0].startDate));
      console.log(this.batch);
      console.log(this.batch[0].startDate.getUTCFullYear(), this.batch[0].endDate.getUTCFullYear());
      console.log(this.batch[0].startDate.getUTCMonth(), this.batch[0].endDate.getUTCMonth());
      console.log(this.batch[1].startDate.getUTCMonth(), this.batch[1].endDate.getUTCMonth());

    }, err => {
      console.log(err);
      this.showToast('Failed to fetch batch');
      });
  }
  // get all curriculum
  getAllCurriculum() {
    this.curriculaService.getAll().subscribe(curricula => {
      this.curricula = curricula;
      console.log(this.curricula);
    }, err => {
      console.log(err);
      this.showToast('Failed to fetch curricula');
      });
  }
  // get all trainer
  getAllTrainer() {
    this.trainerService.getAll().subscribe(trainer => {
      this.trainer = trainer;
      console.log(this.trainer);
    }, err => {
      console.log(err);
      this.showToast('Failed to fetch trainer');
    });
  }
  genCard(evt) {
    evt.stopPropagation();
    const temp: any = {};
    temp.requiredGrads = 13;
    temp.requiredBatches = 1;
    temp.hireDate = this.hireDate;
    // temp.startDate = new Date();
    // temp.requiredGrads = this.rc.requiredGrads;
    // temp.hireDate = new Date();
    // temp.requiredBatches = this.rc.requiredBatches;
    // temp.startDate = this.rc.startDate;
    // temp.formattedStartDate = this.rc.formattedStartDate;
    // temp.batchType = this.batch;
    this.cardArr.push(temp);
    console.log(this.cardArr);
  }
  // Remove a card from the array index
  removeCard(index) {
    this.cardArr.splice(index, 1);
    this.cumulativeBatches();
  }

  exportToCSV(evt, name) {
    evt.stopPropagation();
    new Angular2Csv(this.skills.getElement(), name);
  }
  openMenu(evt) {
    evt.stopPropagation();
  }
  /* FUNCTION - This method will compute the required batch start date, given a required hire date */
  calcStartDate(requiredDate, index, evt) {
    const tempDate = new Date(requiredDate);
    const startDate = (requiredDate === undefined) ? (new Date()) : tempDate;
    console.log(startDate);
    // startDate.setDate(startDate.getDate() - (7 * batchlength));
    startDate.setDate(startDate.getDate() - (7 * 11));
    // push the start date to the closest Monday
    switch (startDate.getDay()) {
      case 0 :
        startDate.setDate(startDate.getDate() + 1);
        break;
      case 1 :
        startDate.setDate(startDate.getDate() + 0);
        break;
      case 2 :
        startDate.setDate(startDate.getDate() - 1);
        break;
      case 3 :
        startDate.setDate(startDate.getDate() - 2);
        break;
      case 4 :
        startDate.setDate(startDate.getDate() - 3);
        break;
      case 5 :
        startDate.setDate(startDate.getDate() - 4);
        break;
      case 6 :
        startDate.setDate(startDate.getDate() - 5);
        break;
      default:
        break;
    }
    // format date to 'mm-dd-yyyy' and assign the output for easier user visibility and comprehension
    const wkDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const formattedDate = this.monthList[startDate.getMonth()] + '-' + startDate.getDate() + '-' + startDate.getFullYear()
      + '(' + wkDayArr[startDate.getDay()] + ')';
    // assigns tempDate to the objects 'hireDate'
    // console.log(tempDate);
    // console.log(this.cardArr[index].hireDate);
    // this.cardArr[index].hireDate = tempDate;
    // this value is used when creating specific batches from the card panel
    this.cardArr[index].startDate = startDate;
    // set the 'startdate' within 'cardArr' at the index value to be the formatted date
    this.cardArr[index].formattedStartDate = formattedDate;
  }
  /* FUNCTION - This method will compute the number of batches needed to be made, given the number of required Trainee's. */
  calcReqBatch(requiredTrainees, index) {
    // compute the total number of Batches estimated
    const neededBatches = Math.ceil(requiredTrainees / 15);

    // calculate the 'requiredBatches' data value in the card array
    this.cardArr[index].requiredBatches = neededBatches;
    // calculate the total number of desired batches
    this.cumulativeBatches();
  }
  /* FUNCTION - This method will assign the particular card objects 'batchType' variable to the selected value. */
  assignCurr(batchType, index) {
    this.cardArr[index].batchType = batchType;
    if (this.cardArr[index].requiredBatches > 0) {
      this.cumulativeBatches();
    }
  }
  /* FUNCTION - This method will generate the sum of all batch types held within the 'cardArr' variable,
  ultimately displaying them in the 'master card' on the reports tab. */
  cumulativeBatches() {
    this.totalJavaBatch = 0;
    this.totalNetBatch = 0;
    this.totalSDETBatch = 0;
    this.totalSalesforceBatch = 0;
    this.totalBigDataBatch = 0;
    this.totalCumulativeBatch = 0;
    for (const x in this.cardArr) {
      if ((this.cardArr[x].batchType)) {
        const batchVal = this.cardArr[x].batchType.currId;
        console.log(batchVal);
        switch (batchVal) {
          // switch case for JAVA batches
          case 1 :
            this.totalJavaBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for .Net batches
          case 2 :
            this.totalNetBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for SDET batches
          case 3 :
            this.totalSDETBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for Salesforce batches
          case 150 :
            this.totalSalesforceBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for BigData batches
          case 164 :
            this.totalBigDataBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for Custom batches
          case 105 :
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          default :
            break;
        }
      }
    }
    console.log(this.totalCumulativeBatch);
  }
  /* FUNCTION - This method will assert that batches have valid credentials for submission */
  submissionValidityAssertion(index) {
    const flagArr = [0, 0, 0];
    let count = 0;
    let canSubmit = 0;
    const today = new Date();

    console.log(this.cardArr[index].startDate);
    console.log(today);
    if (this.cardArr[index].startDate <= today || this.cardArr[index].startDate === undefined) {
      this.errMsg = 'Invalid Hire Date';
      flagArr[1] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].requiredGrads === null) {
      this.errMsg = 'Requires Trainee\'s';
      flagArr[0] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].hireDate === '') {
      this.errMsg = 'Request Hire Date.';
      flagArr[1] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].batchType === undefined) {
      this.errMsg = 'Invalid Batch Type.';
      flagArr[2] = 1;
      canSubmit = 1;
    }
    // Check if multiple input are missing
    for (const x in flagArr) {
      if (flagArr[x] === 1) {
        count = count + 1;
        if (count > 1) {
          this.errMsg = 'Multiple Input Requires';
        }
      }
    }
    return canSubmit;
  }
  /* FUNCTION - This method will generate a new 'card' in the cardArr object, which will be displayed to the user on the reports tab. */
  createBatch(batch, index) {
    const canSubmit = this.submissionValidityAssertion(index);
    // let newBatch: Batch;
    if (canSubmit === 1) {
      this.showToast(this.errMsg);
    } else if (canSubmit === 0) {     // Create batch with batchService
      console.log(batch);
      this.defaultLocation.buildingId = this.setting[0].defaultBuilding;
      this.defaultLocation.locationId = this.setting[0].defaultLocation;
      this.newBatch.name = '-';
      this.newBatch.startDate = batch.startDate;
      this.newBatch.endDate = batch.hireDate;
      this.newBatch.curriculum = batch.batchType.currId;
      this.newBatch.batchLocation = this.defaultLocation;
      this.newBatch.batchStatus = {};
      console.log(this.newBatch);
      this.batchService.create(this.newBatch).subscribe(
        data => {
          console.log('batch created sucessfully');
          this.removeCard(index);
        },
        error => console.log('error creating batch')
        );
    }
  }
  createAllBatch() {
    const tempCardArr = this.cardArr;
    for (const x of Object.keys(tempCardArr)) {
      this.createBatch(tempCardArr[x], x);
    }
    // for (const y of Object.keys(this.remove)) {
    //   console.log(y);
    //   this.removeCard(this.remove[y]);
    // }
    if (this.cardArr.length !== 0) {
      this.showToast('Error creating some batches');
    }
  }
}

