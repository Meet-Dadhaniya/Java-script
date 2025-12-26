
let score="33abc"

console.log(typeof score);

let valueInnumber = Number(score); //always write first letter of datatype in capita like here Number, String etc

console.log(typeof valueInnumber );
console.log(valueInnumber); //NaN


//"33"(any number)written in string can convert in number datatype.
//"33abc"(number and letter combation in string) it will not convert in number datatype it will give NaN as output.
// true convert in 1 and false convert in 0 or visa versa

let isLoggedin = 1

let valueinLoggedin = Boolean(isLoggedin)

console.log(typeof valueinLoggedin); // output = boolean

let emptyval = "Meet"

let valueInempty  = Boolean(emptyval)

console.log( valueInempty);
 
// 1 convert in true and 0 convert to false
// "" (empty string) when we try to convert empty string into boolean it will give false as output
// "Meet" (filled string) when we try to convert filled string into boolean it will give true as output

let num=11

let strinconvert = String(num)

console.log(strinconvert);
console.log(typeof strinconvert);

//as per the upper ex we can convert number to string 


