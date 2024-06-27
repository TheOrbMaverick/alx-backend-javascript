export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new TypeError('Cannot instantiate an abstract class.');
    }
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
