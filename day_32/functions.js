
// prints every odd number between two number 

// const checkOdd = (num) => {
//     return num % 2 !== 0
// }

// const printOdds = (start, end ) => {
//   for (x=start; x <= end; x ++ ) {
//       if(checkOdd(x)){
//           console.log(x)
//       }
//   }

// }
// (printOdds(50, 100))
/// Question 1
// part a- first have students be able to have access to x

// const closureTest = () => {
//   let x = 7;

//   const getX = () => x

//   return getX 
// }

// const results = closureTest();
// console.log(results());

 //  part b

 const closureTest = () => {
    let x = 7;
  
    const getX = () => x
    const addX = () => x++; // adding one to x
          return [getX, addX]; // create an array
};

const [getX , addX] = closureTest();

console.log(getX());
addX();
console.log(getX());
      

