class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Custom method to return size when cast to number
  valueOf() {
    return this._size;
  }

  // Custom method to return location when cast to string
  toString() {
    return this._location;
  }
}
