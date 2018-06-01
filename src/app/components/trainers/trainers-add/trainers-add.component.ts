import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry } from '@angular/material';
import { Trainer } from '../../../model/Trainer';
import { Skill } from '../../../model/Skill';
import { TrainerControllerService } from '../../../services/api/trainer-controller/trainer-controller.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-trainers-add',
  templateUrl: './trainers-add.component.html',
  styleUrls: ['./trainers-add.component.css']
})
export class TrainersAddComponent implements OnInit {
  trainer: Trainer = {
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

  data = {
    trainer: this.trainer
  };

  curricula = [];

  addTrainerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TrainersAddComponent>,
    @Inject(MAT_DIALOG_DATA) public dataP: any,
    private trainerService: TrainerControllerService,
    private fb: FormBuilder
  ) {
    this.addTrainerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      skills: this.fb.array([])
    });

    this.addTrainerForm.controls['firstName'].setValue(this.trainer.firstName);
    this.addTrainerForm.controls['lastName'].setValue(this.trainer.lastName);
    this.addTrainerForm.controls['email'].setValue(this.trainer.email);

    this.curricula = Array.from(dataP.curricula);
    this.curricula.sort((a, b) => a.id - b.id);
  }

  get skills() {
    return (this.addTrainerForm.get('skills') as FormArray).controls;
  }

  skillChange(checked, value) {
    if (checked) {
      //get the current values from the form
      const currentSkills = this.skills.map(control => control.value);

      // merge current skills with new skills
      const skills = currentSkills.concat(this.curricula.find(c => c.id === value).skills);

      // remove dupes
      const uniques = [];

      for (let i = 0; i < skills.length; i++) {
        if (uniques.indexOf(skills[i]) === -1) {
          uniques.push(skills[i]);
        }
      }

      const controls = uniques.map(unique => this.fb.control(unique));
      const formControls = this.addTrainerForm.get('skills') as FormArray;

      while (formControls.length !== 0) {
        formControls.removeAt(0);
      }
      controls.forEach(control => (this.addTrainerForm.get('skills') as FormArray).push(control));
    }
  }

  ngOnInit() {}

  onSubmit(value, valid) {
    if(valid) {
      this.trainer = Object.assign({}, this.trainer, value);
      this.dialogRef.close(this.trainer);
    }
  }

  onNoClick(evt): void {
    evt.preventDefault();
    this.dialogRef.close();
  }

  private mapCurricula() {
    const arr = this.curricula.map(c => this.fb.control(c));
    return arr;
  }
}
