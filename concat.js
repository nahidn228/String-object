let first = "Nahid";
let last = "Hasan";

let fullName = first + last;
let fullName1 = first + " " + last;

console.log(fullName); //NahidHasan
console.log(fullName1); //Nahid Hasan

let fullName2 = first.concat(last);
console.log(fullName2); //NahidHasan

let fullName3 = first.concat(" ").concat(last);
console.log(fullName3); //Nahid Hasan

//let first = "Nahid";
console.log(first.includes("a")); //true
console.log(first.includes("s")); //false
