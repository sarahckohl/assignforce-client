import { Skill } from './Skill';
import { Focus } from './Focus';

export class Curriculum {
  id: number;
  name: string;
  isActive: boolean;
  isCore: boolean;
  skills: number[];

  constructor(id: number, name: string, active: boolean, core: boolean, skills: number[]) {
    this.id = id;
    this.name = name;
    this.isActive = active;
    this.isCore = core;
    this.skills = skills;
  }
}
