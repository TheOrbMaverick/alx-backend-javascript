export default class Currency {
    constructor(code, name) {
        this._code = code
        this._name = name
    }

    //Getter
    get code() {
        return this._code
    }

    get name() {
        return this._name
    }

    //Setter
    set code(newCode) {
        this._code = newCode
    }

    set name(newCode) {
        this._code = newCode
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}