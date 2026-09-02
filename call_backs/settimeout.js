setTimeout(() => {
  console.log("Pratibha");
}, 2000); 

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello")
, 5000}); 
console.log("three");
console.log("four");

function getData(dataId){
    setTimeout(() => {
       console.log("data",dataId) 
    }, 3000);
}
getData(1);
getData(3);
getData(3);

function getData(dataId.getNextData){
    setTimeout
}