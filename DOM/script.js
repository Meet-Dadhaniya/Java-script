// create Element

const newElement = document.createElement('h2');
newElement.textContent = 'Strike is coming';
newElement.id = 'second'

//select Element

const element =  document.getElementById('first');
element.after(newElement)

//created another element

const new2 = document.createElement('h3');
new2.textContent = 'Diwali is coming'
new2.id = 'three'
new2.className = 'third-elem'
new2.style.backgroundColor = 'red'
new2.style.fontSize = '25px'
new2.setAttribute('hello','Meet')


//selected another element

const element2 = document.getElementById('second');
element2.before(new2)

console.log(new2.getAttribute('id'));

// insert element in list

// const list = document.createElement('li');
// list.textContent = 'Milk'
// const list1 = document.createElement('li')
// list1.textContent = 'Cake'
// const list2 = document.createElement('li')
// list1.textContent = 'Paneer'

// const selectlist = document.getElementById('listing')
// selectlist.append(list) // insert at end
// selectlist.prepend(list1) // insert at start


const arr = ['milk' , 'paneer' , 'cake' , 'halwa' , 'tea']

const selectlist = document.getElementById('listing')
const fragment = document.createDocumentFragment();

for(let food of arr){ // this is bad method 
    const listcreate = document.createElement('li')
    listcreate.textContent = food;
    //selectlist.append(listcreate)
    fragment.append(listcreate)
}
selectlist.append(fragment); // this is good method using fragment

const delet = document.getElementById('first')
delet.remove();


