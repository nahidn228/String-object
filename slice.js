const address = "andorkilla";
const part = address.slice(0, 3); //start from 0 index and end before index number 3

//console.log(part);

let sentence = "i am a good and hardworking person";
//console.log(sentence);
//console.log(sentence.slice(7,11));

//console.log(sentence.split(" "));
//console.log(sentence.split("a"));

let friendStr = "rahim,karim,solim,dalim,halim,jalim";
//console.log(friendStr.split(","));

let realFriend = ["rahim", "karim", "solim", "dalim", "halim", "jalim"];

console.log(realFriend);
//[ 'rahim', 'karim', 'solim', 'dalim', 'halim', 'jalim' ]
console.log(realFriend.join());
//rahim,karim,solim,dalim,halim,jalim
console.log(realFriend.join("|"));
//rahim|karim|solim|dalim|halim|jalim

console.log(realFriend.join("--"));
//rahim--karim--solim--dalim--halim--jalim
