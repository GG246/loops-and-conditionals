//this is an object
var me = {
  firstName: "Garima",
  lastName: "Garg",
  age: 24,
  friends: ['Joe', 'Bob', 'Mike', 'Jean']
};
var mom = {
  firstName: 'Babita',
  lastName: 'Garg',
  age: 50,
  friends: ['Garima', 'Joe']
};
//this is an array of people
var people = [me,mom, {
  firstName: 'Joe',
  age: 2
}];
//loop through the people

var younger = [];
var older = [];

people.forEach(function(person,index){
  //if im younger than 30, console log one thing, if not then something else
  if (person.age<30) {
  younger.push(person);
} else {
  older.push(person);
}

});


console.log('the people less than 30 are');
console.log(younger);
console.log('the people not less than 30 are');
console.log(older);
