//DOM stands for document object model :- it is a tree like structure 
//char/header->tags->token->nodes->DOM
//we can access any element by document.getElementbyId() it uses the id of the html tag
//it always give the single object if we want multiple obj then we have to use 
//"document.getElementsByClassName()" it access the element by class name of html tag
//they all return Html collection which is array like obj not array
//document.getElementsByTagName()
//Query selector('#header');it select elemnt like we use to do in css 
//Query selector('.header');its slect elemetn by className
//Query selector('#\header');its select with tag name;
// document.querySelectorAll("className"); for selecting more than one element at a time
//updating existing content-
//innerHtmL- we can set an element of html content  and get an elemets or we can get all the decentdent of that element.it also render the elemnet of the next element
//  outerHTML:-Refers to the entire element including its tags.You can get or set the whole element.
//  textContent:- we can set the textual content of html and set the textual content also in this hidden containt will also visible
// innerText :- It does not show the hidden  text;
//Adding new element using  js
//document.createElement('span');
//content.appendChild(span);
// all the append child element will go in the bottom of the content
//how to create a text node 
// let newPara = document.createElement('p');
//let newText = document.createTextNode('I am the para ');
// newPara = appendChild(newText);
//content.appendChild(newpara);

//Second method 
//let myPara = document.createElement('p');
//myPara.textcontent = 'i am the text';
//content.appenChild(myPara);
//for adding child in the starting of the content
//insertAdjacentHTML()- it has to be called 2 argument
//  loctaion or position where you wnat to add the elemetn or the content
//  and HTML text/content to be inserted means what to be inserted


// below is a example of how to insert element according to your position needed
// let content =  $0;
// let newText = document.createElement('h3');
// newText.textContent= 'ABCD';
// content.insertAdjacentElement('BeforeBegin',newText);

//removing element from exists html with  help of .removeChild()
// -we have to know the parent elemnt of it and the child of the element to remove cause of syntax
//parentElement.removeChild(childElement);
//  it has a drawback cause of knowing parent element and
//  it is confusing of knowing the parent element so we can use a remove method to remvoe the childelement

//we can also change the css using js and we have plenty of option through which we can change the css 
//.style .cssText .serAttribte .className .classList we have to know the specficiy of the css
//  using the .sytle property and we can do it one at a time  
// let content = $0;
// content.style.color = 'red';
//.cssText -we can change multiple thing in the content but not multiple elements get change 
// content.style.cssText = 'color:green; bg-color:pink; font-size:4em;';

//.setAttribute - we can add id,class and style using this property and we can do multiple propery chanage using this 
//content.setAttribute("style","background-color:blue;");

//.className- it gives the name of the class of the element in the form of the string but we can use split method to split the string and use it
//.classList  - it also gives the name of the class related to the element but in form of the list 
// it contain diffrent method like add(),remove(),toggle() and contain().


