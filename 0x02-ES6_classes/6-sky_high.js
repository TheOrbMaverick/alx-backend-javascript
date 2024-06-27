import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Assigning sqft to the parent class
    // Type checking
    if (typeof floors !== 'number') {
      throw new TypeError('Number of floors must be a number');
    }

    // Storing attributes
    this._floors = floors;
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
