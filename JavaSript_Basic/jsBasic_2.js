//Object in js -
console.log('We will study about objects'); 
let rectangle = {
    length: 1,
    breath: 3,
    draw :function(){
        console.log('draw');
    }

};
// console.log(rectangle);
// //If we have to add behaviour in our objects then we have to use function
// //if we are writing the function inside the object then it is known as methods.
// // if we want to run the draw function then we have to write rectangle.draw
// //Factory function and Construction Function
// //Factory function- int this we request the function to genrate the obj
// // //-for creating rectangle again and again by calling createRecatangle function where ever you want
// function createRectangle(length,breath){
//     return rectangle = {
//     length: length,
//     breath: breath,
//     draw :function(){
//         console.log('drawing Rectangle');
//     }

// };
// }
// let Obj1 = createRectangle(5,6);
// //Construction function uses the pascal Notation ->first letter of every word is capital ->NumberofString

    //this refers to the current object you are working and if we are not working on any obj then it refers to the empty object
//  function Rectangle(){
//     this.length =1;
//     this.breath =3;
//     this.draw = function(){
//         console.log('drawing rectangle');
//     }
//   }
//  function shape(){
//     this.length = 1;
//     this.breath = 2;
//     this.draw = function(){
//         console.log('drawing');
//     }
//  }
//  let obj2 = new shape();//new create a empty object ;


 //Dynamic nature of objects -we can add any property and remvoe any property whenever we want

 //primitves are copied by their value whereas Refrmces are copied by their address/refrences


// for-in loops
for(let key in rectangle){
    console.log(key,rectangle[key]);
}
//keys are reflected through key variable and 
// value are reflected through rectangle[key]
//for of loop - iterable or apply on arrays and maps we cannot apply on objects 
