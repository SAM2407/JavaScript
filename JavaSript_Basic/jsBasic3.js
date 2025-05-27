//Built-in Function and Arrays
// Math:- math.random();genrate a random numbers
//math.pi()-gives pi's value

const { startTransition } = require("react");

math.round(1.6)//-gives the round off values
Math.max(1,3,4)//gives the max number
Math.min(1,2,3)//gives the min number
Math.abs(-3)//gives the absolute the number
//In js there are two types of string 1-primitive string
let lastName ='Gond';
//Object string 
let firstName = new String('Samman');
//we can convert primitive string into object string by using this operator
//by the behaviour of js it takes primitive to object by using this operator there is no such reason for that
let message1 = 'this is my first message';

//Template Literal-we use backtick for template literals so we can show our message as we want without using escape charr

let message =`this 
is my 
first message ${firstName} `;
console.log(message);
// // Date and Time- 
let date1 = new Date();//we have 5 types ways of cereating date 
let date2 = new Date('july 20 2002 7:42');//we have 5 types ways of cereating date 
let date3 = new Date(2002,6,20,7 );//in this date the month starts with 0 indexing like 0 == jan and  1== feb and 11 == dec 
console.log(date1);
console.log(date2);
console.log(date3);


//Arrays- it Objects or Refrence type or collection of items  
//in the array function there are few function-
//Adding new Elements
//Finding Elements
//Removing Elements
//Spliting Elements
//Combining Elements
//Creation of Arrays
let numbers = [1,2,4,5,6,7];
//printing the elements of array
console.log(number);
//Inserition in array in end ,start,mid
//Insert in end 
numbers.push(9);
//insert in start
numbers.unshift(8);
//Insert in mid in first give index where you want to insert then you want to delete any neumbers then the  value you want to insert
numbers.splice(2,0,3);
console.log(numbers);


//searching
console.log(numbers.indexOf(10));
//we wnat to check if a number exist in an array
if(numbers.indexOf(2)!=-1)
    console.log("Number is present in array");
else
console.log("Number is not present in array");
console.log(numbers.includes(7));
console.log(numbers.indexOf(4,2));
let courses = [
    {no:1, Name: 'samman'},
    {no:2, Name: 'kuwar'},
];
console.log(courses);
console.log(courses.indexOf({no:1,Name:'samman'}));//it gives -1 cause at that time we were takilng about primitives
//  which wil not work with objects it will not work bacause both objects are on diffrent location and objects uses refreces
//searching with objects in arrays
//call back functions-those function from which we get the address of objects is known as the call back funcitons
//In other words we can say a call back function is a function passed into another function as an argument ,which is then invoked 
//inside the outer function to complete some kind of routine or action 
 let course = courses.find(function(course){
    return course.Name === 'samman'
})
console.log(course);
//use arrow function to short the function for searching with call back function
 let course1 = courses.find(course1=> course1.Name === 'kilvish'
)
console.log(course1 );

//Removing elemet in array 
//from end 
numbers.pop();
//from start
numbers.shift();
//from mid
numbers.splice(2,1);
//Emptying the array  
numbers.length = 0;// if we will use numbers[] then if we store same numbers on other varibale then it will show the number because it gave the address
numbers.splice(0,numbers.length);//another way of emptying an array
 //we also use while loop for to empty an arry
//Combinging & Slicing Arrays:-
let first =[1,2,3,4,5];
let second = [6,7,8,9,0];
let combine = first.concat(second);
console.log(combine);
let split = combine.slice(0,5);
console.log(split);


//spread operator (for combining )
let combine1 = [...first,...second];
console.log(combine1);
//iterate an array - we can use for of loops for iterating an array
for(let key of combine){
    console.log(key);
}
console.log("using for each loop")
combine.forEach(number=> console.log(number));

// //joining arrays:- using join methods
let joined = first.join(",");
console.log(joined);

let parts = joined.split(",");
console.log(parts);

//sorting arrays - inbuilt function known as Sorting function in asscending orders
 let Sorting = combine.sort();
 console.log(Sorting);
 Sorting.reverse()
 console.log(Sorting);
 
//filtering Arrays:-Filter method has been used for filtering in array
let num = [-1,1,2,3,-5];
console.log("filter method for finding neg number in array");
 let filtered = num.filter(value=>value  <=0);
console.log(filtered);

//mapping arrays using in-built method of js :-maps each element of array to something elsw
let mapping=first.map(value=>'samman'+value);
console.log(mapping);
//mapping with objects :-
let number = [1,2,-5,-7];
let filtered1 = numbers.filter(value=>value>=0);
let items = filtered.map(num=>({value:num}));
console.log(items);
 //Reducing array:-
 
