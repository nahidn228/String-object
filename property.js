let person = {
  name: "sadar uddin",
  age: 30,
  isMarried: true,
  profession: "Developer",
  salary: 10000,
};

//console.log(person);
//console.log(person.profession);
let income = person.salary;
//console.log(income);

//bracket notation
//third bracket diye access kora (eta kintu always kaj koren jonamer moddhe whitespace ba - / : etc thake)
console.log(person["age"]);

//arek vabe
let boyos = person["age"];
console.log(boyos);
