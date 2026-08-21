console.log("one");
console.log("two");
console.log("three");
setTimeout(function(){
    console.log("Hello after 5 section");

},5000);
console.log("four");
console.log("five");

function welcome(){
    console.log("welcome to javascript")
}
setTimeout(welcome,3000);

function greet(f_name,l_name){
    console.log("hello",f_name,l_name);

}
setTimeout(greet,2000,'PRATIBHA','RAUNIYAR');
  // passing an array to a function
let arr=[10,20,30,40,50];
function displayNumber(number){
    console.log(number);
}
displayNumber(arr);

// passing an object to a function
function Student(data){
    for(let student of data){
        console.log(student.name,student.age)
    }
}