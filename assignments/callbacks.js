// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// get length
function getLength(arr, cb) {
  return cb(items.length);
}
 getLength(items, function(list){
    console.log(list);
 })

// get last item

function last(arr, cb) {
  return cb(items[3]);
}
  last(items, function(last){
    console.log(last);
  });

// add two numbers
function sumNums(x, y, cb) {
  return cb(x+y);
}
 sumNums(2, 2, function(sumNums){
   console.log(sumNums);
 });

//multiply two numbers

function multiplyNums(x, y, cb) {
  return cb(x*y);
}
 multiplyNums(3, 3, function(multiplyNums){
   console.log(multiplyNums)
 })

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  return cb(item === items)
}
  // Pass true to the callback if it is, otherwise pass false.
  contains('Pencil', items, function(contains){
    console.log(contains);
  });


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
