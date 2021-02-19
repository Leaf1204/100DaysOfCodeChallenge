function init(){
    let firstName = "Bob"

    function sayFristName(){
        console.log(firstName);
    }

    sayFristName()
}

init();

// console.log(firstName);

let a = 1; // variable a assigned to 1

let func = function (){ // outermost function
    let b = 2;
    console.log("a and b is accessible (outer):", a, b);
    let innerFunc= function (){ // innermost function
        let c = 3;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);