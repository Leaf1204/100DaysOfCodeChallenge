// differnce between let and var
// var been in JS since begining let is more modern JS.
//let has a block scope, var has functional scope. 
// var gets hoisted at top of question, let doesn't. 

// == vs ===?
// both are comparison opporators  
// == compaires value not type. === is value and type 
// in order to compaire == it tried to make both side equal. Where as === doesnt try convert 

// let vs const 
// const is a constant value you cant reuse it again. 

let i = 1;
i = 2;
console.log(i);

// beacuse its an object it will let you modify object. you can't reasign, thats why its good practice to use const when working with objects 
const c = [1, 2]
c.push(3)
console.log(c);

// differnce between null and undefined 
// undefinded is automatically asigned where is null is manually put so you can come back and clean up your code. 
//typeOf(undefined)=> undefined
//typeOf(null) => object 

//use of arrow functions
// Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. The arrow function example above allows a developer to accomplish the same result with fewer lines of code and approximately half the typing.
//Curly brackets aren’t required if only one expression is present.

//what is prototypal inheritance?
//every obejct has a proptery called protype where you can add methods and properties to it. when you create other objects it uses properties from parent.

// let car = function(model) {
//     this.model = model;
// };

// car.prototype.getModel = function() {
//     return this.model;
// }

// let toyota = new car ('toyota');
// console.log(toyota.getModel());


// let nissan = new car ('nissan');
// console.log(nissan.getModel());

// //differnce between function declaration and function expression?

// console.log(funcD());
// //expression wont be aviable before declaration 
// console.log(funcE());

// function funcD() {
//     console.log('function declartion');
// };

// let funcE = function(){
//     console.log('function expression');
// };

//function express is an anoymouse function that is saved into a variable. finction can be caled before it declartion 

// what are promises and when would we used them?
//when you want to make an async call which as to wait, then used callback function, to simpliy we use promosises. 


//setTimeout()
// setTimeout(function(){
//     console.log('a');
// }, 0);

// console.log('b');
// console.log('c');

//=> b, c , a because when use setTimeout it will take this asynchronous and it has to wait for everything on a stack to finish. 

// what is closure and how do we use it?
// when a function returns another function the returning function will hold its enviroment.

let obj = function() {
    let i = 0;

    return {
        setI(k){
            i = k;
        },
        getI() {
            return i;
        }
    }
}

let x = obj ();

x.setI(4);
console.log(x.getI())

// 1. What are the advantages of using React?

// MVC is generally abbreviated as Model View Controller.

// Use of Virtual DOM to improve efficiency
// React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
// Gentle learning curve
// React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
// SEO friendly
// React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
// Reusable components
// React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
// Huge ecosystem of libraries to choose from
// React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.

// 2. What is JSX?
//JSX stands for JavaScript XML.
//It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
//As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.

// 3. What are the differences between functional and class components?
//Functional components are nothing but JavaScript functions and therefore can be declared using an arrow function or the function keyword:
//Functional components use React hooks to handle state. It uses the useState hook to set state of a variable inside the component:
//Class components on the other hand, are declared using the ES6 class:

// 4. What is the virtual DOM? How does react use the virtual DOM to render the UI?
// 5. What are the differences between controlled and uncontrolled components?
// 6. What are the different lifecycle methods in React?
// 7. Explain Strict Mode in React.
// 8. How to prevent re-renders in React?
// 9. Explain React state and props.
// 10. Explain React Hooks.
// 11. What are the different ways to style a React component?
// 12. Name a few techniques to optimize React app performance.
// 13. What are keys in React?
// 14. How to pass data between react components?
// 15. What are Higher Order Components?
// 16. What is prop drilling in React?
// 17. What are error boundaries?