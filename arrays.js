// Given an array of strings, use a function to reverse all the elements
//  in the string in ascending order and the specific elements in descending order
function reversedStrings(arr){
    let ascending = arr.sort();
    let ascendingReverse = ascending.reverse();
    let reverseSpecific = ascendingReverse.map((element,i)=> {
       if (i ===0 ||i ===2){
        return element.split("").reverse().join("");

       }
       return element

    });
    return reverseSpecific

}
let strings = ["sheila","joyce","ann","lekishon"]
let result = reversedStrings(strings);
console.log(result);

// Given an array of objects, each object representing a person with a name and age property,
//  write a function that returns the sum of all people who are less than 18 years.
// const people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Eunice', age: 22 },
//     { name: 'Charlie', age: 14 },
//     { name: 'Max', age: 19 },
//   ];

function sumAgesUnder18(arr) {
  let sum = arr.reduce((accumulator, currentValue) => {
    if (currentValue.age < 18) {
      return accumulator + currentValue.age;
    } else {
      return accumulator;
    }
  }, 0);

  return sum;
}
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
let results = sumAgesUnder18(people);
console.log(results); 

// Using JS functions and an array of numbers, return positive
//  if an element within the array is positive, negative if an element is negative, else zero
function checkingArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        return "positive";
      } else if (arr[i] < 0) {
        return "negative";
      }
    }
    return "zero";
  }
  
  const array1 = [2, 4, 6, 8, 10];
  const array2 = [-4, 4, -9, 8, -20];
  const array3 = [0, 0, 0, 0, 0];
  
  console.log(checkingArrays(array1)); 
  console.log(checkingArrays(array2));
  console.log(checkingArrays(array3));

//   Given an array of objects, where each object represents an employee 
// with an id, name, and salary property, write a function that returns a 
// new array of employee objects sorted by their salary in ascending order.
  function employeesBySalary(employees) {
    employees.sort((a, b) => a.salary - b.salary)
    return employees;
  }
  const employees = [
    { id: 1, name: "Sheila", salary: 40000 },
    { id: 2, name: "Christine", salary: 60000 },
    { id: 3, name: "Gift", salary: 80000 },
    { id: 4, name: "Emmah", salary: 55000 },
    { id: 5, name: "Cherie", salary: 65000 }
  ];
  
  console.log(employeesBySalary(employees));
  
  


