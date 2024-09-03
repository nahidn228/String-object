let sub = "Bangla";
let subject = "bangla";

console.log(sub);
console.log(sub.toLowerCase());
console.log(sub.toUpperCase());

if (sub === subject) {
  console.log("ami porikkhay pataya pelbo");
} else {
  console.log("huday prista ultay");
}

let drink = "water";
let liquid = " water"; //whitespace pore gese 

//whitespace dur korar jonno amra "trim()" use korbo
if (drink.trim() === liquid.trim()) {
  //trim() age porer whitespace dur korte pare but majkhner eg.. "wa ter"  whitespace dur korte pare na   
  console.log("panir opor nam life");
} else {
  console.log("sumodre onek pani, but khayte parina");
}