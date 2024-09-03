let sentence = "i am learning web dev";

let reverse = "";
for (latter of sentence) {
  //console.log(latter);
  reverse = latter + reverse;
}
//console.log(reverse); // ved bew gninrael ma i

let rev = "";
for (i = 0; i < sentence.length; i++) {
  //console.log(i);
  let latter = sentence[i];
  rev = latter + rev;
}
//console.log(rev); //ved bew gninrael ma i

//shortcut

let reversed = sentence.split("").reverse().join("");
console.log(reversed); //ved bew gninrael ma i
