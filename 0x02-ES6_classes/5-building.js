export default class Building {
  constructor(sqft) {
    // Enforce abstract class - cannot instantiate directly
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
