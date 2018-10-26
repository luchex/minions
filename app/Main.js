'use strict';

const LinkedList = require('./linkedList/LinkedList');

// Initializing linked list
let list = new LinkedList();

//Adding 6 element to linked list
console.log("Printing the linked list");
list.addNode(1);
list.addNode(2);
list.addNode(5);
list.addNode(7);
list.addNode(8);
list.addNode(9);
list.print();

// Removing 8 from linked list
console.log("Removing 8 from the linked list");
list.removeNode(8);

list.print();