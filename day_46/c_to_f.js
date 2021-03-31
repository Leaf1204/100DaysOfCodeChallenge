class converter {
    convertCtoF(c) {
    
        const f = c * 9/5 + 32
        return f
    }
   convertFtoC(f) {
        const c = (f-32)* 5/9
        return c
    }
    convertCtoK(c) {
        const k = c + 273.15
        return k
    }
}

const convert = new converter();

let temp = convert.convertCtoF(0);
console.log(`${temp} f`);

let temp2 = convert.convertFtoC(0);
console.log(`${temp2} c`);

let temp3 = convert.convertCtoK(0);
console.log(`${temp3} k`);




