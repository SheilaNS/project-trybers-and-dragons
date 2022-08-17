import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  private static _instanceCount = 0;
  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype._instanceCount += 1;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    try {
      return Archetype._instanceCount;
    } catch (error) {
      throw new Error('Not implemented');
    }
  }

  abstract get energyType(): EnergyType;
}