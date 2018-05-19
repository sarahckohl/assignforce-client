import { Skill } from './Skill';
import { Unavailability } from './Unavailability';
import { Address } from './Address';

export class Trainer {
  id: number;
  firstName: string;
  lastName: string;
  skills: number[];
  certifications: any;
  active: boolean;
  resume: any;
  preferredLocation: number;
  unavailabilities: Unavailability[];
  email: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    skills: number[],
    certifications: any,
    active: boolean,
    resume: any,
    unavailabilities: Unavailability[],
    email: string,
    preferredLocation: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
    this.certifications = certifications;
    this.active = active;
    this.resume = resume;
    this.unavailabilities = unavailabilities;
    this.email = email;
    this.preferredLocation = preferredLocation;
  }
}
