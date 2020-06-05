

//ES5:Arrays


const Arr  = [ 2012, 1879, 3657, 7589, 1445, 1975, 7000];

var total = 0;



myFunction = function (value) {
	value = value/2;
	console.log(value);
}

myFunction2 = function(){
	let v = Arr[Math.floor(Math.random()*Arr.length)];
	console.log(`The index of ${v} is ${Arr.indexOf(v)}`);
}

myFunction3 = function(){
	Arr.sort();
	return Arr.find((elt)=> elt>1000);
}

myFunction4 = function(){
	for (let i=0; i<10; i++ )
		Arr.push(Math.floor(Math.random()*(10000-1000+1))+1000);
}

console.log (Arr);

myFunction4();

console.log(Arr);

//Array.isArray()
//console.log("Is that an array: "+ Array.isArray(Arr));

//Array.forEach()
Arr.forEach(myFunction);

//Array.map()
// Arrow function
console.log("The elements are multiplied by 3: " + '\n' + Arr. map((elt)=> elt*3 ));

//Array.filter()
console.log("What are the elemets higher than 2000: "  +Arr.filter((elt)=> elt>2000));

//Array.reduce()
console.log("Sum: " + Arr.reduce((elt,total)=> total+elt));

//Array.every()
console.log("Are all elements lower than 10000: " + Arr.every((elt) => elt<10000));

//Array.some()
console.log("Are there any elements lower than 1000: " + Arr.some((elt)=> elt<1000));

//Array.indexOf()
myFunction2();

//Array.find() + Array.sort()
console.log("the first element higher than 1000 is: " + myFunction3());

