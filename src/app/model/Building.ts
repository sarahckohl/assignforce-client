import { Room } from './Room';
import { Address } from './Address';

export class Building {
  active: boolean;
  id: number;
  address: number;
  name: string;
  rooms: number[];

  constructor(active: boolean, id: number, address: number, name: string, rooms: number[]) {
    this.active = active;
    this.id = id;
    this.address = address;
    this.name = name;
    this.rooms = rooms;
  }
}
