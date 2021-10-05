import {Composition} from './Composition.js';


export class LinkedList {
    constructor() {
        this.__head = null;
        this.__length = 0;
        this.current_item = null;
    }

    __len__() {
        return this.__length;
    }

    __iter__() {
        this.current_item = this.__head;
        this.__current_index = 0;
    }

    __next__() {
        let returned_node = this.current_item;
        this.current_item = this.current_item.getNext();

        if (this.__current_index < this.__length) {
            this.__current_index += 1;
        } else {
            this.__current_index = 0;
        }

        return returned_node.toData();
    }

    __prev__() {
        let returned_node = this.current_item;
        this.current_item = this.current_item.getPrev();

        if (this.__current_index > 0) {
            this.__current_index -= 1;
        } else {
            this.__current_index = this.__length - 1;
        }

        return returned_node.toData();
    }

    __getitem__(index=null) {
        if (index === null ) {
            return this.current_item;
        }
        if (index >= this.__length) {
            let integer = Math.ceil(this.__length / index);
            index -= (this.__length * integer);
        }
        else if (index < 0) {
            let integer = Math.ceil(this.__length / index);
            index += (this.__length * integer);
        }

        let currentNode = this.__head;
        let counter = 0;
        while (currentNode) {
            if (index === counter) {
                return currentNode.toData();
            }

            currentNode = currentNode.getNext();
            counter++;
        }
    }

    __init_list(value) {
        this.__head = new Composition(value);
        this.__head.setNext(this.__head);
        this.__head.setPrev(this.__head);
        this.current_item = this.__head;
    }

    append_left(value) {
        if (this.__head === null) {
            this.__init_list(value);
        } else {
            let new_node = new Composition(value);
            let right_node = this.__head.getPrev();
            right_node.setNext(new_node);

            new_node.setPrev(right_node);
            new_node.setNext(this.__head);

            this.__head.setPrev(new_node);
            this.__head = new_node;
        }
        this.__length++;
    }

    append_right(value) {
        if (this.__head === null) {
            this.__init_list(value);
        } else {
            let new_node = new Composition(value);
            let right_node = this.__head.getPrev();
            right_node.setNext(new_node);

            new_node.setPrev(right_node);
            new_node.setNext(this.__head);

            this.__head.setPrev(new_node);
        }
        this.__length++;
    }

    append(value) {
        this.append_right(value);
    }

    __search(value) {
        console.log("value", value)
        let current = this.__head;
        let find_item = null;
        for (let i = 0; i < this.__length; i++){
            console.log("current", current.toData())
            if (JSON.stringify(current.toData()) === JSON.stringify(value)) {
                find_item = current;
                break;
            }
            current = current.getNext();
        }
        if (find_item === null) {
            throw new Error('Value Error');
        }
        return find_item;
    }

    remove(value) {
        if (this.__head) {
            let remove_item = this.__search(value);
            let current = remove_item.getPrev();

            if (remove_item === this.__head) {
                if (this.__head === this.__head.getNext()) {
                    this.__head = null;
                } else {
                    this.__head = current.getNext().getNext();
                }

            }
            current.setNext(remove_item.getNext());
            current.getNext().setPrev(current);
            this.__length -= 1;

            if (this.current_item === remove_item) {
                this.current_item = this.__head;
            }

            remove_item.setNext(null);
            remove_item.setPrev(null);
        } else {
            throw new Error('Value Error');
        }
    }

    drag(value) {
        if (this.__head) {
            let drag_item = this.__search(value);
            let drop_item = drag_item.getPrev();

            if (this.__length === 1) {
                return;
            }

            if (this.__length === 2) {
                this.reversed();
                return;
            }

            drop_item.getPrev().setNext(drag_item);
            drag_item.getNext().setPrev(drop_item);

            drag_item.setPrev(drop_item.getPrev());

            drop_item.setNext(drag_item.getNext());
            drop_item.setPrev(drag_item);

            drag_item.setNext(drop_item);

            if (drop_item === this.__head) {
                this.__head = drag_item;
            } else if (drag_item === this.__head) {
                this.__head = this.__head.getNext();
            }
        }
    }

    drop(value) {
        if (this.__head) {
            let drop_item = this.__search(value);
            let drag_item = drop_item.getNext();

            if (this.__length === 1) {
                return;
            }

            if (this.__length === 2) {
                this.reversed();
                return;
            }

            drop_item.getPrev().setNext(drag_item);
            drag_item.getNext().setPrev(drop_item);

            drag_item.setPrev(drop_item.getPrev());

            drop_item.setNext(drag_item.getNext());
            drop_item.setPrev(drag_item);

            drag_item.setNext(drop_item);

            if (drop_item === this.__head) {
                this.__head = drag_item;
            } else if (drag_item === this.__head) {
                this.__head = this.__head.getNext();
            }
        }
    }

    // Создаём новые узлы из массива и добавляем в конец списка.
    fromArray(values) {
        values.forEach(value => this.append(value));
    }

    // Создаём массив из всех узлов
    toArray() {
        const nodes = [];
        let currentNode = this.__head;
        for (let i = 0; i < this.__length; i++){
            nodes.push(currentNode.toData());
            currentNode = currentNode.getNext();
        }
        return nodes;
    }

    last() {
        if (this.__head) {
            return this.__head.getPrev().toData();
        }
        return null;
    }

    insert(previous, item) {
        if (!previous) {
            return;
        }
        let previous_item = this.__search(previous);

        let new_node = new Composition(item);
        let front = previous_item.getNext();

        previous_item.setNext(new_node);
        new_node.setNext(front);

        front.setPrev(new_node);
        new_node.setPrev(previous_item);
        this.__length++;
    }

    reversed () {
        if (!this.__head) {
            return;
        }
        let current = this.__head;
        let current_next = current.getNext();
        let _prev = null;
        for (let i = 0; i < this.__length; i++){
            _prev = current.getPrev();
            current.setPrev(current.getNext());
            current.setNext(_prev);
            current = current_next;
            current_next = current.getNext();
        }
        this.__head = current_next;
    }

    __contains__ (value) {
        let current = this.__head;
        let find_item = null;
        for (let i = 0; i < this.__length; i++){
            if (current.toData() === value) {
                find_item = current;
                break;
            }
            current = current.getNext();
        }
        return find_item !== null;

    }
}
