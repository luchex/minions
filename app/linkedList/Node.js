'use strict';

/**
 * Node class would be responsible for representing a node.
 */
class Node {
    constructor(data) {
        this.data = data;
    }

    /**
     * The function is for setting the next node.
     * @param node
     */
    setNext(node) {
        this.next = node;
    }

    /**
     * The function is to fetch the next node reference.
     * @returns {*}
     */
    getNext() {
        return this.next;
    }

    /**
     * The function is to get the data
     * @returns {*}
     */
    getData() {
        return this.data;
    }

}

module.exports = Node;