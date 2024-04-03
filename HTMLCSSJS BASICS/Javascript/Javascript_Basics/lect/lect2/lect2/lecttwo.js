const accountId = 144553;
let accountMail="azio@rediffmail.com" ;
var accountPassword = "12345";
/* Prefer not to use var , var is not block-scoped and functional-scoped, let is block scoped and functional scoped*/
variable="value";
let accountstate;
console.log(accountstate); //undefined

accountCity="Jaipur";
accountCountry="India";
// accountId=2 //Not allowed
console.log(accountId); //can not be changed by users without editing the value assigned to the variable
accountMail="nakamura@gmail.com";
console.log(accountMail);
console.table([accountstate,accountId,accountMail,accountPassword,accountCity,accountCountry]);
