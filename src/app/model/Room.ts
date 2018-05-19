import { Unavailability } from './Unavailability';
import { Building } from './Building';

export class Room {
  id: number;
  active: boolean;
  roomName: string;
  building: number;
  unavailabilities: number[];

  constructor(id: number, active: boolean, roomName: string, building: number, unavailabilities: number[]) {
    this.id = id;
    this.active = active;
    this.roomName = roomName;
    this.building = building;
    this.unavailabilities = unavailabilities;
  }
}
