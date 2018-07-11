import { Component, OnInit, Input, Output, AfterViewInit, AfterViewChecked, OnChanges, EventEmitter } from '@angular/core';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {
  // data

  lockSkills = true;
  disabled = true;
  skillsList: Skill[] = [];
  allSkills: Skill[] = [];
  skill: Skill;
  @Input() trainer: Trainer;
  @Input() editable: boolean;
  loading: boolean;
  @Output() skillsUpdated: EventEmitter<Trainer> = new EventEmitter<Trainer>();

  constructor(
    private skillService: SkillControllerService,
    private trainerService: TrainerControllerService,
    private http: HttpClient,
    public auth0: AuthService
  ) {}

  ngOnInit() {
    this.getAllSkills();
  }

  ngOnChanges(changes) {
    if(changes.trainer) {
      this.trainer = Object.assign({}, changes.trainer.currentValue);
    }
  }

  trainerSkills(): Skill[] {
    return this.allSkills.filter(aSkill => {
      if(!this.trainer.skills){
        return false;
      }
      return this.trainer.skills.findIndex(tSkill => tSkill === aSkill.id) >= 0;
    });
  }

  updateSkills() {
    this.lockSkills = !this.lockSkills;
    if (this.lockSkills) {
      this.skillsUpdated.emit(this.trainer);
    }
  }

  // called to save the current state of the trainers skills
  saveTSkills() {
    // this.trainerService.update(this.trainer).subscribe(() => {});
  }

  // add a skill to the current trainer
  addSkill(skill) {
    for (let i = 0; i < this.skillsList.length; i++) {
      if (this.skillsList[i] === skill) {
        this.trainer.skills.push(skill);
        this.skillsList.splice(i, 1);
        break;
      }
    }
  }

  // remove a trainer skill on the bottom
  removeSkill(skill) {
    this.trainer.skills = this.trainer.skills
      .filter(tSkill => skill.id !== tSkill);
  }

  // grab all the skills and create a skill list
  getAllSkills() {
    this.loading = true;
    this.skillService
      .findAll()
      .toPromise()
      .then(response => {
        this.loading = false;
        this.allSkills = response;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
}
