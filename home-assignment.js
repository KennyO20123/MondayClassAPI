// #1 

new Promise((resolve, reject) => {
  resolve(10);
  console.log('P');
  reject(new Error (20))
})

.then( x => console.log('F', x));
.catch (x => console.log('R', x));
//Resolves the value to 10, console logs P and sets up a error handler to reject set value to 20

//#2

Promise.resolve(42); 
.then(x => console.log(x)) 
.then (x=> console.log(x))
.then (x => console.log(x))

//The promise sets the resolve value to 42, then logs the resolved value 3x 

//#3 

p = new Promise((resolve, reject) => {
  console.log('RUN'); 
  resolve(42);
});

p.then(x => console.log(x));
p.then(x => console.log(x)); 
p.then(x => console.log(x));

//A new Promise is created that has a resolve and reject then console log's RUN
//Sets resolve value to 42
//Then prints it out three times