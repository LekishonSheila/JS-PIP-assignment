// Write a function that takes an array of numbers as input and returns the sum of all the numbers
function sumofArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let myArray = [10,4,6,8,4];
let totalSum = sumofArray(myArray);
console.log(totalSum);

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function SumGreaterThan100(num1, num2) {
    let sum = num1 + num2;
    return sum > 100;
  }
console.log(SumGreaterThan100(60, 70));
console.log(SumGreaterThan100(30, 40));

// Write a function that takes a string as input and returns the number of vowels in the string
function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  console.log(countVowels("Hello Mary")); 
  console.log(countVowels("This is a good girl"));

// Write a function that takes in a array of numbers as a parameter and 
// returns the second largest number in the array
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    
    return secondLargest;
  }
  console.log(findSecondLargest([1, 2, 3, 4, 5])); 
  console.log(findSecondLargest([10, 20, 30, 40, 50]));

 
// Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 
    
    

    
  
