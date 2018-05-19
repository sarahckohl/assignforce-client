import { Component, OnInit } from '@angular/core';

import { Curriculum } from '../../model/Curriculum';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { Skill } from '../../model/Skill';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  constructor(private curriculumControllerService: CurriculumControllerService,
    private skillControllerService: SkillControllerService) {}

  //An array of all Core Curricula currently in the backend.
  coreData: Curriculum[] = [];
  skills: Skill[] = []

  //Gathers all core Curricula from the backend and assigns it to coreData for displaying in a list.
  ngOnInit() {
    this.curriculumControllerService.findAll().subscribe(data => {
      this.coreData = data;
    });
    this.skillControllerService.findAll().subscribe(data => this.skills = data);
  }

  curriculumSkills(curriculum: Curriculum): Skill[] {
    const filtered: Skill[] = [];
    curriculum.skills.forEach(skill => {
      const t = this.skills.find(s => s.id === skill);
      if (t) {
        filtered.push(t);
      }
    });
    return filtered;
  }
}
