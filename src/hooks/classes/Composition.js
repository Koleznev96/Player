export class Composition {
    constructor(data) {
        this.__data = data;
        this.__next = null;
        this.__prev = null;
    }

    toData() {
        return this.__data;
    }

    setNext(next) {
        this.__next = next;
    }

    setPrev(prev) {
        this.__prev = prev;
    }

    getNext() {
        return this.__next;
    }

    getPrev() {
        return this.__prev;
    }
}
