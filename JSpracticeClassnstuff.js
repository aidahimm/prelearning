
//very trivial
//will definitely add things and modify later

//class of patients
class patient{
	constructor(name, id, covid, cond, age){
		this.name = name,
		this. id = id,
		this.covid= covid,
		this.condition = cond,
		this.age = age;
	}

	display(){
		Object.defineProperty(one,"treatmentnum", {enumerable : false});
		return `Name: ${this.name} <br>ID: ${this.id} <br>Affected by COVID-19: ${this.covid} <br>Condition: ${this.condition} <br>Age: ${this.age} <br> Treatment Number: ${this.treatmentnum}<br><br>`;
	}

}

class corona extends patient{
	constructor(name, id, covid, cond, age, trt){
	super(name, id, covid, cond, age);
	this.treatmentnum = trt;
	}

}

var people = new Array();
alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function rndName(){
	nameArr = ["Aida", "X", "John", "Bruce", "Mike", "Jane", "Ivy", "lucas", "Levante", "James", "Karen", "Amy", "Diane"];
	randomName = nameArr[Math.floor(Math.random()*nameArr.length)]
	return randomName;
}

function rndCond(){
	condArr = ["Good", "Bad", "Getting better", "Getting worse", "Stable", "Dying", "Recovered"];
	randomCond = condArr[Math.floor(Math.random()*condArr.length)];
	return randomCond;
}

//String.charAt()



function findPerson (){
	//for(j=0;j<10;j++){
	for (let i=0; i<10; i++){
		one = new patient(rndName(), alphabet.charAt(Math.floor(Math.random()*26)) + Math.floor(Math.random()*(99999-10000+1)+10000), false, rndCond(), Math.floor(Math.random()*(99-8+1)+8));
		people.push(one);
		console.log(people[i]);
}		
	for(let i=10;i<15;i++){
		two = new corona(rndName(), alphabet.charAt(Math.floor(Math.random()*26)) + Math.floor(Math.random()*(99999-10000+1)+10000), true, rndCond(), Math.floor(Math.random()*(99-8+1)+8), alphabet.charAt(Math.floor(Math.random()*26))+ "-" + Math.floor(Math.random()*(1000-100+1)+100)+ "-" + Math.floor(Math.random()*(10-1+1)+1));
		people.push(two);
		console.log(people[i]);		
	}
		//I tried not bruteforcing it but I don't know how to... I'll look at it again later...
  		document.getElementById("demo").innerHTML = people[0].display() + people[1].display() + people[2].display() + people[3].display() + people[4].display() + people[5].display() + people[6].display() + people[7].display() + people[8].display() + people[9].display() + people[9].display() + people[10].display() + people[11].display() + people[12].display() + people[13].display() + people[14].display();	//}
}
