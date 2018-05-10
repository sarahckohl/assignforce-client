import { Room } from './Room';
import { Address } from './Address';

export class Building {
  active: boolean;
  id: number;
  address: Address;
  name: string;
  rooms: { id: number }[];

  constructor(active: boolean, id: number, address: Address, name: string, rooms: { id: number }[]) {
    this.active = active;
    this.id = id;
    this.address = address;
    this.name = name;
    this.rooms = rooms;
  }
}
