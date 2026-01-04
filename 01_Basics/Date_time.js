
// let myDate=new Date()

// console.log(typeof myDate); //IMP type of date is object


// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


// ---- time stamp (imp) -----


let myTimestamp = Date.now()

console.log(myTimestamp);
 
let myDate=new Date("01-04-2026")
console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert current date in second.

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getFullYear());

let formate=newDate.toLocaleDateString("Default",{

    weekday: "long", //sunday
    year: "numeric" //2026
})

console.log(formate);
