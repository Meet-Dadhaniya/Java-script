
//--- events using onclick method this method is not good it will not work for multiple events ----

// function handleClick(){
//    const element = document.getElementById('first')
//    element.textContent = 'Strike is coming'
// }


//--- another medium good method for event it will not work for multiple event ---

//  const h1Element = document.getElementById('first')
// h1Element.onclick = function Click(){
//    //h1Element.textContent = 'Meet Patel'
//    h1Element.style.backgroundColor = 'red'
// }


//--- This is Best Method for Events we can add multiple events using this----

// h1Element.addEventListener('dblclick', ()=>{
//    h1Element.textContent = 'I am the Best'
// })

// h1Element.addEventListener('click', ()=>{
//    h1Element.style.color = 'red'
// })

// h1Element.addEventListener('mouseenter', ()=>{ // --- explore more events in notion notes 
//    h1Element.textContent = 'Jay Shree Krishna'
// })

// const firstChild = document.getElementById('child1')

// firstChild.addEventListener('click',()=>{
//    firstChild.textContent = 'I am Clicked'
// })

//  ----- add event using loop this is not optimized approch ----

// const parent = document.getElementById('parent')
// for(let click1 of parent.children){
//    click1.addEventListener('click',()=>{
//       click1.textContent  = 'I am clicked'
//    })
// }


// ---- Event Bubbling  -----

const grandParent = document.getElementById('grandparent')
grandParent.addEventListener('click',(e)=>{
   //console.log(e); //e means it returns event object that contains a lot of information you can take any variable insted of e but.
                //e.target is most imp because it shows on which element we have clicked.   
   e.target.textContent = "I am clicked" // apply event on all elem by add event listener on one element.
},true) //true means capture phase is on or false means capture phase is off

// const Parent = document.getElementById('parent')
// Parent.addEventListener('click',()=>{
//    console.log(' Parent is clicked')
// },true)

// const child = document.getElementById('child')
// child.addEventListener('click',()=>{
//    console.log('child is clicked')
// },true)

/* --- The benifit of e(event object) is that we dont have to apply event listener on all element like
  if there is a parent and child like relation then you can only apply event listener on parent using e(event object) 
  it shows on which element you have clicked no need to apply event listener on all element in parent child relation.
  Through this you can apply event on all element just by adding event listener on only one element. -----
 */


//   ----- Remove event listener ---

/* to remove event listener dont create other function for remove event listener because it refers to other memory
  to remove event listener create function for event pass that function to both addEventListener and removeEventListener ex   
*/

function onClickhandle(){
   e.target.textContent = "I am clicked"
}

parent.addEventListener('click',onClickhandle) // pass only refernce of function not like function()
parent.removeEventListener('click',onClickhandle) //you can write it inside function also so that one time event perform.