//QuerySelectorAll
//changing 2nd li green
// var items1 = document.querySelectorAll('li');
// items1[1].style.color = 'green';
// console.log(items1[2]);

// // changing odd background green
// var items = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'green';
// }

// Traversing The DOM
var itemList = document.querySelector('#items');
//1: ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

//2: parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentElement)

//3: childNodes
// console.log(itemList.childNodes)

//4: children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //5: firstChild
// console.log(itemList.firstChild);

// //6: firstchildElement
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'im first';

// //7: lastChild
// console.log(itemList.lastChild);

// //8: lastchildElement
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'im last';

// //9: nextSibling
// console.log(itemList.nextSibling);
// //10: nextElementSibling
// console.log(itemList.children[0].nextElementSibling);
// itemList.children[0].nextElementSibling.style.color = 'red';

// //10: previousSibling
// console.log(itemList.previousSibling);
// //11: previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

//12: createElement

//Create Div
var newDiv = document.createElement('div');
//adding class
newDiv.className = 'hello';
//adding Id
newDiv.id = 'hello1';
//adding attribute
newDiv.setAttribute('title', 'hello div');
//creating text node
var newDivText = document.createTextNode('Hello World');
//adding text to div 
newDiv.appendChild(newDivText);

//creating container and h1 variables
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
//inserting div into the DOM
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '40px';
newDiv.style.color = 'red';
console.log(newDiv);

var itemListText = document.createTextNode('Hello Word');
itemList.insertBefore(itemListText, itemList.children[0]);
itemList.style.color = 'red';