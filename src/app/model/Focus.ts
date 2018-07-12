import { Skill } from './Skill';

export class Focus {
  id: number;
  name: string;
  active: boolean;
  skills: number[];

  constructor(id: number, name: string, active: boolean, skills: number[]) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.skills = skills;
  }
}
