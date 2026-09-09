async function greet() {
  console.log("hello!");
}
 function Api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data,i found");
            resolve(200);
        },3000);
    });
 }
 // await Api(); error bcz await works only inside async

  async function getweatherData() {
    await Api();
    await Api();

  }
  getweatherData();

