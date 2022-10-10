export interface Building {
  building: BuildingEnum,
  floor: number,
  warehouse: Warehouse
}

export enum BuildingEnum {
  'Stegne 9a' = 1,
  'Stegne 11c' = 2,
}

export interface Warehouse {
  fruit: Supply[],
  officeMaterials: Supply[],
  drinks: Supply[]
}

export interface Supply {
  name: string,
  quantity: number
}
