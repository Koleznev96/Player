import {LinkedList} from './LinkedList.js';


export class PlayList extends LinkedList {
    constructor(name, compositions) {
        super();
        this.fromArray(compositions);
        this.namePlayList = name;
    }

    getName() {
        return this.namePlayList;
    }

    current() {
        return this.current_item?.toData();
    }

    // начать проигрывать все треки, начиная с item
    play_all(item) {
        this.current_item = this.__search(item);
        return this.current_item.toData();
    }

    // перейти к следующему треку
    next_track() {
        return this.__next__();
    }

    // перейти к предыдущему треку
    previous_track() {
        return this.__prev__();
    }
}
