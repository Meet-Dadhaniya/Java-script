const user = {
    name : "Meet",
    price : 999 ,

    welcome : function (){
        console.log(`${this.name} , welcome to the website`);
        
    }
}
user.welcome()
console.log(this); // output = {} empty object

 // ----- Arrow Function -----

 const myName = (name1) => {
    console.log(name1);
 }
 myName("Meet")
