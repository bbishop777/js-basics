/* Create a `myName` variable and assign it a String value */
var myName = "Dev League";
/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person = {
 	name: "Dev League",
 	age: 15
 };
/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
function greet(name) {
 	console.log("Hello, my name is " + person.name)
 }
/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
function drivingAge (person) {
 	if (person.age >= 16) {
		return true;
	}
	else {
		return false; 
	}
}
var canDrive = drivingAge(person);
/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
var dataTypes = ["Yes", 5, true, null, undefined, {car: "Chevy", year: 1967}, [1, 2, 3]];
/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
 var dog = { 
 	bark: function() {
 		console.log("woof!")
 		return "woof!"
 	}, 
 	name: "Spot"
 }
