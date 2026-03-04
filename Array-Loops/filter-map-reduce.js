const arr = [1,2,3,4,5,6,7,8,9,10]

let newarr = arr.filter( (num) => {return num > 5} )

console.log(newarr);

let addinarr = arr.map ( (num) => {
    return num+10
} )

console.log(addinarr);

//  reduce()

let r1 = arr.reduce((acc , curr) => {

    return acc + curr
},0)

console.log(r1);

