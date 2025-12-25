const accountId = 11
let accountEmail = "ex@gmail.com"
var accountPassword = "1234"
let accountState;

accountCity="Jamnagar"

// accountId=2

/*
Prefer not to use var
 because of issue in block scop and functional scope 
*/

accountEmail="mk@gmail.com"
accountPassword="2323"
accountCity="new york"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
