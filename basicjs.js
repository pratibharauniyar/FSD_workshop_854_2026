// Data types-1 Primitive 2-Non-Primitive
// let ,var, const-variables

let a,b,c;
a=5;
b=10;
c=a+b;
console.log(c);

//  Array-used to store value of same type

// Empty array
const empty = [];

// Array with values mixed types
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'hello', true, null];
const arr1 = ['a', 'b', 'c'];

console.log(arr1[0]); // 'red'
console.log(arr1[2]); // 'blue'
console.log(arr1[5]); // undefined (index out of bounds)

const number = [1, 2];

number.push(3);      // [1, 2, 3]
number.pop();        // [1, 2] (returns 3)
number.unshift(0);   // [0, 1, 2]
number.shift();      // [1, 2] (returns 0)
 const a1=[1,2,3,4,5,6,7];
 a1.slice(2,5);
 
const nums = [1, 2, 3, 4, 5]; // slice
const part = nums.slice(1, 3); 
console.log(part); // [2, 3]

const letters = ["a", "b", "c", "d"]; // splice 
letters.splice(1, 2); 
console.log(letters); // ["a", "d"]

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// concat joins arrays together
const result = arr1.concat(arr2, arr3);

console.log(result); // [1, 2, 3, 4, 5, 6]
 // we can also use ... to concat
 const r=[...a1,...arr2,...a3];

 // objects -key value pairs
  let student ={
    name: "Pratibha",
    rollno: 854,
    branch:"CSE"
  }
  console.log(student);
  console.log(student.name);

  // Functions- reusable block of code
   function sum(a,b){
    let r;
    r=a+b;
    return r;
    
   }
   let result=sum(2,3)
   console.log(result);

   // function example
   function greeting_msg(f_name,l_name)
   {
    let r=f_name+l_name
    console.log("goodmorning"+r)  //${r} is equal as +r
   }
greeting_msg("Pratibha ","Rauniyar")

// output goodmorningPratibha Rauniyar
  
// alert -only print a string
alert("pratibha");

// confirm -return true on okay and false on cancel ,it is used to excute next program
confirm(' do you want to exist from here');
 //true - on ok
confirm(' do you want to exist from here');
//false on cancel

// prompt -to take input from user, whatever value we put it will show on pressing enter,return value in string so we conert into int
// parcelInt is used to convert string into int
prompt('please put the value of a');
prompt("Please enter the value of a")
'24'
let a = prompt("Enter the value of a")
let b = prompt("Enter the value of b")

console.log(a+b)
// return string
// parseInt for integer
// parsefloat- for decimal
let a=parseInt(prompt('enter a'))
let b=parseInt(prompt('enter b'))
console.log(a+b)

// array implementation
 const arr=[1,10,5,8,6]
for(let i=0;i<arr.length,i++){
  console.log('array elements are:' arr[i]);
}