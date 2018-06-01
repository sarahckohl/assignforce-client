import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { Router } from '@angular/router';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { Curriculum } from '../../model/Curriculum';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  [x: string]: any;

  firstName;
  lastName;
  trainers: Trainer[] = [];
  curricula: Curriculum[] = [];

  isManager = true;
  isLoading: boolean;

  canLoad = true;

  constructor(public dialog: MatDialog, 
    private trainerService: TrainerControllerService,
    private curriculumService: CurriculumControllerService,
    private router: Router) {}

  ngOnInit() {
    this.isManager = true;

    this.isLoading = true;
    this.trainerService
      .findAll()
      .toPromise()
      .then(t => {
        this.trainers = t;
        this.isLoading = false;
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      });

    this.curriculumService
      .findAll()
      .toPromise()
      .then(curricula => this.curricula = curricula);
  }

  showCalendar() {}

  goToTrainer(id: Number) {
    this.router.navigate([`profile/${id}`]);
  }

  grabS3Resume(trainer: Trainer) {}

  addTrainer(): void {
    //add trainer

    const trainer: Trainer = {
      id: null,
      firstName: '',
      lastName: '',
      skills: [],
      certifications: '',
      active: true,
      resume: '',
      preferredLocation: null,
      unavailabilities: [],
      email: ''
    };

    const dialogRef = this.dialog.open(TrainersAddComponent, {
      width: '450px',
      data: {
        trainer: trainer,
        curricula: this.curricula.slice(0,3);
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        //  this.addTrainer(result);
        this.trainers.push(result);

        this.canLoad = false;

        this.trainerService
          .create(result)
          .toPromise()
          .then(t => {
            console.log(t);
            // event.stopPropagation();
            window.location.reload();

            this.trainerService
              .findAll()
              .toPromise()
              .then(t2 => {
                this.trainers = t2;
                this.canLoad = true;
              })
              .catch(error2 => {
                console.log(error2);
              });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  // activateTrainer(trainer: Trainer) {
  //   trainer.active = true;
  // }
}
