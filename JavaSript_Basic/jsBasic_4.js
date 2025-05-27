//Functions in java Script:- a block of that fill specific task 
//Syntax function function_name(parameter){
//pice of code}
//why we need of fun- 1-reusability of code
//2 readbility increases
//3 less bulky and easy to debug
// diffrence between call_back function  and function
function run(){
    console.log("Running towards ending basic of js ");

}
//function call or invoke
run();
//js has a proprety named as hoisting  in which  js call all the function declaration at one place
// or the top  of the file  so you can call your function wherever you want even above the creation of function 
//function assingment
 let person = function walk(){
    console.log("walking");
}
person();//we can't call walk and it is not able to hoisting bevause it is assingment not declaration

//Annoymous functtion assignment 
 let person2 = function(){ 
    console.log("walking");
}
person2();
 //when we gave extra vlaues in function it stores in argument objects which is a feature of js
 function sum(a,b){
    let total =0;
    for(let value of arguments)
        total +=value;
    return total;
 }
 let ans = sum(1,2,3,4);
 console.log(ans);
 //arguments can take any numbers of  paramenters and if you want to use you can again use it from arguments

 //rest operator:- "..."

function sum(...args){//it save the values in array
    console.log(args);//rest parameter is the last parameter of function you cannot give the other para after rest operator
}
sum(1,2,3,4,5);
//Default parameters:- r=5 is a default paramete but we can change by sending new values
function interest(p,r=5,y=10){//after r we have to make other para  which come afrer r we have to make it also a default parameter
    return p*r*y/100;
}
 console.log(interest(1000,10,5));
 //dont need to learn try and catch because we are learning basic not oops and error handling 

