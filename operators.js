// 1. Logical Operators
// 2. Comparison Operators
// 3. Arithmatic Operators
// 4. Bitwise Operators
// 5. Increment / Decreement Operators
// 6. Assignment Operators
// 7. Ternary Operators

// Operator and Operands
// a + b; // Here, a and b are Operands and + is Operator

// Arithmatic Operator (+, -, *, /, %)

// let a = 3; 
// let b = 4;
// let sum = a + b;
// let diff = a - b;
// let mult = a * b;
// let div = a / b;
// let mod = a % b;

// console.log(sum);
// console.log(diff);
// console.log(mult);
// console.log(div);
// console.log(mod);

// 2. Assignment Operators (=, +=, -=, *=, /=, %=)

// let a = 3;
// let b = 4;

// // let sum = a + b;
// // let diff = a - b;
// // let mult = a * b;
// // let div = a / b;
// // let mod = a % b;

// let sum = a += b;
// let diff = a -= b;
// let mult = a *= b;
// let div = a /= b;
// let mod = a %= b;

// // a += b;
// // a += b;
// // a *= b;
// // a /= b;
// // a %= b;

// console.log(sum);
// console.log(diff);
// console.log(mult);
// console.log(div);
// console.log(mod);

// let a = 3;
// let b = 4;

// a += b;

// console.log(a);

// b -= a;

// console.log(b);

// Comparasion Operators (==, ===, !=, >=, <=, <, >, !==)
// 1. Example of Each Comparasion Operator
// 2. Difference between == and ===
// 3. Logical Operator

// Different Comparasion Operators: 
let a = 5;
let b = '5';
console.log(a == b);  // only compares the values

let c = 10;
let d = "10";
console.log(a === b); // different type

let e = 5;
let f = '5';
console.log(e != f);  // considers the values as equal (compares only the values not type)

let g = 11;
let h = '11';
console.log(a !== b);  // compares type and value being not equal

let i = 5;
let j = 3;
console.log(i > j);  // greater than

let k = 5;
let l = 5;
console.log(k >= l);  // greater than or equals to

let m = 5;
let n = 9;
console.log(m < n);  // smaller than

let o = 9;
let p = 9;
console.log(o <= p);  // smaller than or equals to

// Difference between: == and === 

    // while == mainly compares the value and not necessarily the typeof, === compares the type as well 
        // and  If the values have different types, JavaScript will try to convert them to a common type before making the comparison.


// Logical Operators
// Logical operators in JavaScript are used to combine multiple conditions or expressions.
// They allow you to make decisions based on whether certain conditions are true or false.

    // AND operator && to check both condition | for eg while using if statement ( if a > b && a > c) to find greatest number
    // OR operator || to check if at least one condition is true | for eg let a = 5, b = 7 (a > 3 || b >10) ture because first stmt is correct
    // NOT operator ! to negate or invert the condition | for eg a = true !a is flase










