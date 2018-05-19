import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../../../model/Trainer';
import { Skill } from '../../../model/Skill';
import { TrainerControllerService } from '../../../services/api/trainer-controller/trainer-controller.service';
import { SkillControllerService } from '../../../services/api/skill-controller/skill-controller.service';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.css']
})
export class TrainerItemComponent implements OnInit {
  @Input() trainer: Trainer;
  isManager: boolean;
  allSkills: Skill[] = [];

  constructor(private trainerService: TrainerControllerService,
    private skillsService: SkillControllerService) {}

  ngOnInit() {
    this.isManager = true;
    this.skillsService
      .findAll()
      .toPromise()
      .then(response => this.allSkills = response)
  }

  removeTrainer(trainer: Trainer) {
    console.log(trainer);
    console.log(this.trainer);
    this.trainer.active = false;
    this.trainerService
      .update(this.trainer)
      .toPromise()
      .then(t => {
        console.log(t);
      })
      .catch(error => {
        console.log(error);
      });
  }

  activateTrainer(trainer: Trainer) {
    console.log(trainer);
    console.log(this.trainer);
    this.trainer.active = true;
    this.trainerService
      .update(this.trainer)
      .toPromise()
      .then(t => {
        console.log(t);
      })
      .catch(error => {
        console.log(error);
      });
  }

  listSkills() {

    if(!this.trainer.skills || this.trainer.skills.length === 0) {
      return 'None';
    }

    const skillsArray = this.allSkills
      .filter(aSkill =>{
        if(this.trainer.skills){
          return this.trainer.skills.findIndex(tSkill => aSkill.id === tSkill) >= 0;
        }
        return false;
      });
      return skillsArray.map(skill => skill.name).join(', ');
  }
}
