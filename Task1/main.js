// console.log(window);
// alert(1);
//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// //multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'))
// const ul=document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove
// ul.firstElementChild.remove()
// ul.firstElementChild.textContent='Hello';
// const firstLi=document.querySelector('li:first-child');
// firstLi.style.color = 'green';
// const secondLi = document.querySelector('li:nth-child(2)');
// secondLi.style.color = 'yellow';

const btn = document. querySelector('.btn');
btn.addEventListener( 'mouseover', (e)=>{
  e.preventDefault();
   document. querySelector('#my-form').style.background=
   '#ccc';
  document. querySelector( "body") .classList.add(by-dark);
  document. querySelector('.items').lastElementChild. innerHTML = '<h1>Hello</h1>';
});
btn.addEventListener( 'mouseout', (e)=>{
    e.preventDefault();
     document. querySelector('#my-form').style.background=
     '#ccc';
    document. querySelector( "body") .classList.add(by-dark);
    document. querySelector('.items').lastElementChild. innerHTML = '<h1>Hello</h1>';
  });
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}