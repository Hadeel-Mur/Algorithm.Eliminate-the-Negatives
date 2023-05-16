// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// // Pseudocode
// 1- will define an array of numbers (negative and positive numbers)
// 2- will use loop for looping through the array and declare an if statment when it is
// a negative number turn it to 0, and display the rest as they are in the same array
 
let array = [-1, 3, -5, 8, 2, -7, -9];
for (let i =0 ; i < array.length; i++){
  if (array[i] < 0){
    array[i] = 0
  } else{
    array[i]
  }
} console.log(array)



// coding


// let array = [-1, 3, -5, 8, 2, -7, -9];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         array[i] = 0;
//     }
//   }
//   console.log(array);

// Diagram
// 1- when x[i] < 0 => x[i] = 0
// 2- when x[i] > 0 => x[i] = any number from the array as long as it is a positive number 
 
