// const myFunc = () => {
//   let orange = 5;
// };

// myFunc()
// console.log(orange);

// orange will be not defined- ok but wait, didn't we just define Apple? Howver that apple variable only excisit between the curly brackets so only exists within the context of the functions execution. Once the function is done executing, the varible gets disposed of and no longer exists.

// Anything inside the curly brackets does have acess to Apple. What we can do is we can return a function. return () => orange 

// const myFunc = () => {
//     let orange = 5;

//     return () =>
//       orange;
    
//   };
  
//   const showOranges = myFunc()
//   console.log(showOranges());

  //we now have acess to the variable five. Why? 
  // because even though the function is called outside of the curly brackets, the definition of the function is inside the curly brackets so it still has acess to the number 5. 

  //with this understanding we can start making more complex stiutations. For example making a function. For example subtracting from the Oranges. Imagine we ate one orange
  // We do this by making an array return [() => orange]; 
  // the second function takes away one orange 
  //return [() => orange, () => orange--];
// we now have an array with two functions. One that shows you orange, the other that subtracts from oranges. We need to desctructuire the array. The first function is one that shows the oranges, the second function is one that subtracts an orange so we will call it eatOrange 
//const [showOranges, eatOrange ] = myFunc()
// First we will do console.log(showOranges) then eatOrange

//   const myFunc = () => {
//     let orange = 5;

//     return [() =>
//       orange, () => orange++];
//   };
  
//   const [showOranges, eatOrange ] = myFunc()
//   console.log(showOranges());
//   eatOrange();
//   console.log(showOranges());

  // we can see that at first its five from the original showOranges, then we do eatOrange which takes away one orange, then we do showOranges for a second time with the now minus one orange so the result is 4. 
  // as long as these functions are defined from within the function we can acess the date from the function anywhere. 
  // every time we run myFunc(); it's create a new copy of those functions so it will create a seperate Orange.

  // if we were to copy   
  // const [showOranges, eatOrange ] = myFunc()
  // console.log(showOrange());
  // and paste and change it to:  
  //const [showOrange2, eatOrange2 ] = myFunc()
  //console.log(showOranges2());
// when we run the code we will get that showOranges2 is 5 as it is referring to the first time we ran the function. When we ran the function again it created a new execution of the function which create a new Orange and returned a new set of these two functions that operate inderpendently 


const myFunc = () => {
    let orange = 5;

    return [() =>
      orange, () => orange--];
  };
  
  const [showOranges, eatOrange ] = myFunc()
  console.log(showOranges());
  eatOrange();
  console.log(showOranges());

  const [showOranges2, eatOrange2 ] = myFunc()
  console.log(showOranges(), showOranges2());

  //if we showed both of them side by side
//   console.log(showOranges(), showOranges2());
// we will get 
//5
//4
//4 5 

// This is essentally what closures is. The idea that you can take a function have it go beyound its execution by return functions that access data inside the function. Closure is taking advantage of the scoping of the data inside of a function and being able to acess the data inside the function. 
// we are never able to directly edit orange. We can use functions to change orange 