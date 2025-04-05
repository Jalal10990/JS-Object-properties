
//create an object
const person = {};
//add properties
// {firstName:"Shah", lastName:"Jalal", age: 19, eyeColor:"brown"};

// second method 
person.firstName = "Shah";
person.latName = "Jalal";
person.age = 19;
person.eyeColor = "brown";

//display data from object
document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old. ";

// JavaScript object using new Object()
const person2 = new Object();
person2.firstName = "Ali";
person2.latName = "Jalal";
person2.age = 19;
person2.eyeColor = "blue";
document.getElementById("demo2").innerHTML = person2.firstName + " is " + person2.age + " years old. ";

//Object Constructor Functions
// Object Type Person3
function Person3(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    //new attribute
    this.nationality = "Pakistani";
}
//create a Person3 object
const myFather = new Person3("Kashif", "Imran", 47, "brown");
//display age
document.getElementById("demo3").innerHTML = "My father is " + myFather.age + "and nationality is " + myFather.nationality + ".";

