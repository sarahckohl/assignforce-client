import { mockDataSize } from '../in-mem-db-settings';

export const buildingData = {
  id: 'building-data',
  type: 'object',
  properties: {
    building: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'building'
      },
      uniqueItems: true
    }
  },
  required: ['building']
};

export const buildingDef = {
  id: 'building',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    active: {
      $ref: 'active'
    },
    name: {
      type: 'string',
      faker: 'lorem.sentence'
    },
    address: {
      $ref: 'address'
    },
    rooms: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        $ref: 'room'
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'name', 'address', 'rooms']
};
