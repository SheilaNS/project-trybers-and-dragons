import Energy from '../Energy';

export default interface Fighter {
  // atributos
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  // métodos
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}