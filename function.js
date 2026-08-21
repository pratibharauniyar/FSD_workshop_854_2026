function a_func(a,b){
    let s,m,mu,rem;
    s=a+b;
    m=a-b;
    mu=a*b;
    rem=a%b;
    console.log(`sum=${s} substraction=${m} multiplication=${mu} and rem=${rem}`)
}

a_func(10,5);
let r=function(a,b)
{
console.log(a+b)
};
r(10,5);

// callback function
 function greet(name){
    console.log("hello"+name);
 }
function processUser(callback){
    callback("Pratibha");
}
processUser(greet)

// calculaion function
function calculate(a,b,callback){
    let result=a+b;
    callback(result);

}
function display(result){
    console.log("result=",result);

}
calculate(10,20,display);