
//const user = new Object() // onject declare using new key word (this is called singleton object)

const user1 = {} // another method of object declaration (this is called non singleton object)

user1.id = "123abc"
user1.name = "Meet"    // inserting value in object
user1.isLoggedin = false

//console.log(user);  {} gives this empty object as output
//console.log(user1); // also gives empty object {}

const regularuser = {
    email: "some@gmail.com",
    fullName : {
                             //nested object
        userName : {
           firstname : "Meet",
           lastname : "Patel"
        }
    }
}

//console.log(regularuser.fullName.userName.firstname); //accesssing values from nested object

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj4 = {
    5 : "e",
    6 : "f"
}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //combine object using spread operator always use this syntax

 console.log(obj3);

 // array of object

 const user11 = [
    {
        id:1,
        email:"ex@gmail.com"
    },
     {
        id:2,
        email:"ex11@gmail.com"
    }

 ]

console.log(user11[0].email);
console.log(Object.keys(user1)); // it will give all key as output but in array

console.log(Object.values(user1)); // it will give values of objects in form of array 

console.log(user1.hasOwnProperty("isLoggedin")); //use to check if given value is present in obj or not

