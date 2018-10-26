'use strict';

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Function is to add a node to a linked list.
     * @param value
     */
    addNode(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }
    }

    print() {
        let result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.getData());
            temp = temp.getNext();
        }
        console.log(result.join(' -> '));
    };

    /**
     * function is responsible for deleting a node in the linked list.
     * @param value
     */
    removeNode(value) {
        let temp;
        let previousNode;
        if (!this.head) {
            return;
        }
        if (this.head.getData() === value) {
            this.head = this.head.getNext();
            return;
        }
        previousNode = this.head;
        temp = this.head.getNext();
        while (temp) {
            if (temp.getData() !== value) {
                previousNode = temp;
                temp = temp.getNext();
            } else {
                previousNode.setNext(temp.getNext());
                break;
            }
        }
    }
}

module.exports = LinkedList;