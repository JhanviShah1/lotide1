const assertEqual = require('../assertEqual');
const head = require('../head');

//console.log(head([1, 2, 4]));
//console.log(head([]));
assertEqual(head([1,2,3,5]),1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
