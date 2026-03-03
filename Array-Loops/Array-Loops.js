// for of 

const arr = [1,2,3,4]

for (const i of arr) {
    
    console.log(i);
    
}

//for in

const obj = {
    name : 'Meet',
    surname : 'Patel',
    Age : 19
}

for (const key in obj) {
   
    console.log(key); // gives only key
    
}

for (const key in obj) {
  
    console.log(obj[key]); //gives only value
      
}

for (const key in obj) {
  
    console.log(`${key} :- ${obj[key]}`); 
      
}

for (const i in arr) {
    
    console.log(arr[i]);
    
}

const coding = ["cpp" , "java" , "pythong" , "rust"]

coding.forEach( function (item) {
    console.log(item);
    
})

// we can also pass function in forEach loop

function print(item){
    console.log(item);
    
}

coding.forEach(print)

// how to use forEach with array of object

const myarr = [
    {
        language : "Java"
    },

    {
        language : "cpp"
    }
] 

myarr.forEach( (item) => {
    console.log(item.language);
    
} ) 