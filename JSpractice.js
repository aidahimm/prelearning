//silly code to start practicing the programming language

//ES5:Prototypes
//ES5: Arrays
//ES6:Syntax

function test (name, yob, mood, state, money) {
  this.name = name;
  this.yob = yob;
  this.state = state;
  this.mood = mood;
  this.money = money;
}

//ES5

function rndName(){
nameArr = ["Aida", "X", "John", "Bruce", "Mike", "Jane"];
randomName = nameArr[Math.floor(Math.random()*nameArr.length)]
return randomName;
}

function rndMood(){
moodArr = ["happy", "tired", "bored", "hungry", "sad", "annoyed"];
randomMood = moodArr[Math.floor(Math.random()*moodArr.length)];
return randomMood;
}

function rndState(){
  stateArr = ["I'm fine", "I wanna sleep", "I'm tired", "I want money"];
  randomState = stateArr[Math.floor(Math.random()*stateArr.length)];
  return randomState;
}

console.log('Push the button to start');

function createPerson(){
  var one = new test(rndName(), Math.floor(Math.random()*(2000-1940+1)+1940), rndMood(), rndState(), Math.floor(Math.random()*1000));
  console.log(one.getInfo());
  return one;
}

test.prototype.getAge = function (){
	//ES6: (let) has block scope, is only recognized in this function and variable will be considered undeclared if used outside of it
  let x = new Date().getFullYear() - this.yob;
  return ` Their age is ${x} years old.`;
}

test.prototype.getInfo = function(){
  //ES6: use these (``) to be able to concatinate variables and text
  return `${this.name} who is born in ${this.yob} is ${this.mood}, they are saying: " ${this.state}", and they have ${this.money}$.`;
}

test.prototype. giveMoney = function () {
  this.donation = Math.floor(Math.random()*5000);
  this.money += this.donation;
  return ` Donate ${this.donation}$ ... ${this.name} now has ${this.money}$.`; };

test.prototype.checkMood = function() {
  if(this.money>5000)
    this.mood = 'in a much better mood'; 
  else 
    this.mood = `in a better mood`;
  return ` ${this.name} is ${this.mood}.`;
}


const showAlert = function(){
  alert('Ran Successfully');
}

//console.log(one.getInfo());
//console.log(one.getAge());
//console.log("What you're displaying is a(n) " + typeof(one));
//console.log(one.giveMoney());
//console.log(one.checkMood());

function findPerson (){
  var one = createPerson();
  document.getElementById("demo").innerHTML = one.getInfo()+ one.getAge()+ one.giveMoney()+ one.checkMood();
}

showAlert();



