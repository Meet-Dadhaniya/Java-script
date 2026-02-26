let a = 300
if(true){
    let a = 10
    console.log(a); // block scope output = 10
}
console.log(a); // global scope output = 300

function one(){

    const name = "Meet"

    function two (){
        const website = "Patel"
        console.log(name);
    }
    //console.log(website); gives error
  
  two() 
}
one()
