//number 1
//What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
Mutation is basically changing the array itself instead of returning a new array with the new changes.
examples
prototype. pop()
prototype. push()
prototype. shift()
prototype. unshift()
prototype. reverse()

                   and
Non-mutating methods do not change the object after the method has been used.
examples:
prototype. slice()
prototype. concat()
prototype. map()
prototype. filter()





//number 2
let languages =["C#","JavaScript", "Ruby", "PHP", "Python"];
languages.push('Kotlin');
console.log(languages);


let languages2 =["C#","JavaScript", "Ruby", "PHP", "Python"];
languages2.splice(3,0,"Java");
console.log(languages2);

let languages3 =["C#","JavaScript", "Ruby", "PHP", "Python"];
languages3.shift();
console.log(languages3);


let languages4 =["C#","JavaScript", "Ruby", "PHP", "Python"];
languages4.unshift("Scala", "Swift");
console.log(languages4);

let languages5 =["C#","JavaScript", "Ruby", "PHP", "Python"];
languages5.splice(3,1, "Go", "Rust");
console.log(languages5);

//number 3
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
 let newFruit = fruit;
 console.log (changeFruit(newFruit));

 

 //number 4
 function number(a,b,c,d){
	return Math.max(10,40,50,5)
 }

 console.log(number(Math.max));


 //number 5
 function valTimeIndex(num){
	return num.map((val,index) => val*index);
 }

 let arrayNumbers = [1,2,3,4];
 let multiplier = valTimeIndex(arrayNumbers);

 console.log(multiplier);