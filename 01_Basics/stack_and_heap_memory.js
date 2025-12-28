//Stack --> Primitive datatype
//Heap --> Non-primitive datatype

//example of stack
let myname = "Meet"

let anothername = myname
anothername="Patel"         // in stack the copy is passed

console.log(anothername);
console.log(myname);

//example of heap

let one = {

    email:"mk@gmail.com"
}

let two = one
two.email = "meet@gmail.com"   // in heap reference is passed

console.log(one.email);
console.log(two.email);


