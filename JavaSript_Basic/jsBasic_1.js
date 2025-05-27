console.log("hello world")
{//its scope is within the block in which we define it and we cannot redclear the 
    // the same block .we can not access the variable outside the block .
    let a = 5;
console.log(a); 
}
//var has a global variable and we can redeclare the same variable again and again 
//we can assecc it outside the block also 
var b = 4;
console.log(b);
var b = 6;
//const is a variable for fixing the variables value so we cannot assign second value after giving a value to it 
//if we try to do this it will give a assignment to constant variables error.
//rule for giving the vlaue of the variable 
//1)varialble cannot be a reserved keyword
//2)name should be the meaning full it is not important but it is easy to understand 
//3)cannot start with variable and contain only space and hypen'-' in name as a special key
// 4)use camel case for naming for variable for easy understanding 
// 5)we can also create multiple varable at a single time like  var a,b

// data types there are two types of data types 
// i)primitve data types
// String ='Samman gond '
// Number = 1,2,3,----
// Boolean true and false
// undefined lea a ;
// null let a = null

//Refrence types 
// objects  we can create a objects 
//let person = {
//firstName : 'samman'
//ago =3}; we have two way for accessing the data first dot and bracket person.age and person[age]
//why we have two notation for accessing it 
// Array -   it is data structure contains used to contain list of items and we can also contain string and other also 
//let names = ['love','samman','tejus'] 
// Function- we will study in laters session 
//ecma sets the standard of the browsers of the web application 
// Operators 
//Arithemetic, Assignment, comparison ,Boolean,Equality operator{loose equality,strict equality},Ternary operator,{cont?val1:val2},
//Logical  operator{And-all conditon have to be true,Or-any single conditon to be true ,Not- it reverse the value i.e-true make false and false make true},
//bitwise operators-{Bitwise AND-it fisrt convert number into binary then work on it accordingly ,Bitwise OR-it fisrt convert number into binary then work on it accordingly}


//controls statements
//if-else
let age = 18;
if(age>=18){
    console.log('you can vote');
}
else{
    console.log('you cannot vote bacche pahle bade ho  jaa');
}
//Switch
let num = 2;
switch(num){
    case 1: console.log('A');
    break;//if we do not write the break statement then after completing the first statement it will go to the next statement automatically and don't stop till it reach the end of the case 
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('it is default case');
}

//Loops 
//for loops - reperation of same task 
let i =0,sum =0;
for(i=0;i<7;i++){
    sum = sum+i;
}
console.log('sum =',sum);
//while loop-
i =0;
let sum1=0;
while(i<5){
  sum1= sum1+i;
    i++;
}
  console.log('sum1 =',sum1);
//Do while loop -  it execute alteast one time either the given condition is true or not 
let sum3 =0;
i =0;
do{
  i++;
   console.log('sum3 = ',sum3);
}  while(i<6){
        sum3 = sum3+i;
    }
   
