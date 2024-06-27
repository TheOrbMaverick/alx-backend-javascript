export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new TypeError('Cannot instantiate an abstract class.');
        }
        // Type checking
        if (typeof sqft !== 'number') {
            throw new TypeError('Square footage must be a number');
        }

        // Storing attributes
        this._sqft = sqft;
    }

    // Getter
    get sqft() {
        return this._sqft;
    }

    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}