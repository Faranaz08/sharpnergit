//Examine the document object 

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent ='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//Get element by ID
//console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// headerTitle.style.border='2px solid black';
// const addItemButton = document.getElementById("add-item-button");
// addItemButton.style.fontWeight = "bold";
// addItemButton.style.color = "green";



//GETELEMENT bY Class NAme

// var items = document. getElementsByClassName('list-group-item');
//  console.log(items);
// console.log(items[1]);
// items [1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor='yellow';
// var items = document. getElementsByClassName('list-group-item');

// items[2].style.backgroundColor='green';


// // items.style.backgroundColor='black'; this will not work so for loop

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold' ;
// }


//Get element by Tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor='yellow';
// var items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor='green';


// items.style.backgroundColor='black'; this will not work so for loop

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold' ;
//     li[i].style.backgroundColor='green';
// }
//And try editing it with getelementsbyclassname and then by getelementbytagname
// var items = document. getElementsByClassName('list-group-item');
// for(var i=0;i<items.length;i++){
//     items[i].textContent='change by class' ;
// }


// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderfaction ='solid 4px #ccc';
var input = document.querySelector('input');
 input.value= "Hello World";



var submit = document.querySelector('input[type="submit"]');
 submit.value= "SEND";
var item = document.querySelector( ".list-group-item");
item.style.color ='red';
 var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
 var secondItem = document.querySelector
secondItem.style.color = 'coral';


Queryselectoorall
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';
var odd=document.querySelectorAll('li:nth-child(odd)');


//Make the 2nd item have green background color
// Make the 3rd item invisible


