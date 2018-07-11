import { Curriculum } from './Curriculum';
import { Trainer } from './Trainer';
import { Skill } from './Skill';
import { Address } from './Address';
import { Room } from './Room';
import { Building } from './Building';
import { Focus } from './Focus';

export class Batch {
  id: number;
  name: string;
  startDate: number;
  endDate: number;
  curriculum: number;
  trainer: number;
  cotrainer: number;
  skills: number[];
  address: number;number
  building: number;
  room: number;

  constructor(
    id?: number,
    name?: string,
    startDate?: number,
    endDate?: number,
    curriculum?: number,
    trainer?: number,
    cotrainer?: number,
    skills?: number[],
    address?: number,
    building?: number,
    room?: number
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.curriculum = curriculum;
    this.trainer = trainer;
    this.cotrainer = cotrainer;
    this.skills = skills;
    this.address = address;
    this.building = building;
    this.room = room;
  }
}
