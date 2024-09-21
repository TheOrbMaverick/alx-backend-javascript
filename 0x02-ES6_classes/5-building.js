export default class Building {
  constructor(sqft) {
    // Enforce abstract class - cannot instantiate directly
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class.');
    }

    // Ensure sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number.');
    }

    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
