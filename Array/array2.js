
const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]); // bad method

// const concatarray = marvel_heros.concat(dc_heros)
// console.log(concatarray);  // concat method

// -- use spread operator insted of concat --

const allHeros = [...marvel_heros, ...dc_heros]
console.log(allHeros);

