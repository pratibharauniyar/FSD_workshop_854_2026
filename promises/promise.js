// A Promise in JavaScript is an object representing the 
// eventual completion or failure of an asynchronous operation and its resulting value
// three mutually exclusive states -pending,fulfilled,rejected

/*let Promise=new Promise((resolve, reject) => {
    console.log("I am a new promise");

    resolve("successfully executed");
     resolve(123);
})

 function GetData(dataID){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("successfull");
        },8000);
     });
 }
  let r=GetData(123);
  const GetPromise=()=>{
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
    })
  }*/
  
let myPromise = new Promise((resolve, reject) => {
    console.log("I am a new promise");

    resolve("successfully executed");
    
    resolve(123);
});

function GetData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("successful");
        }, 8000);
    });
}

// r is a Promise, so handle it with .then
let r = GetData(123);

r.then(result => {
    console.log("Promise resolved:", result);
});
 
 
 
  const GetPromise=()=>{
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("successful");
        // reject("network error")
    });
};
 let promise=GetPromise();
 promise.then(()=>{
    console.log("promise is fulfilled");
 });
  promise.catch(()=>{
    console.log("network is not properly working")
  });