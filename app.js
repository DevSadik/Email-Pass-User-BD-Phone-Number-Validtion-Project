//Valid Password Check
let pass    = '26451685993#wsa' ;
let pattern = /^[0-9a-zA-Z@#* ]{8,18}$/i;

console.log(pattern.test(pass));

//Valid Email Check

let gmail = 'wahidsadik88@yahoo.com' ;
let pattern = /[a-z0-9.]*@[a-z]{2,8}[.a-z]{3}/i;

console.log(pattern.test(gmail));

//Valid Zip Code Check

let zip     = '5700';
let pattern = /^[0-9]{4,6}$/;

console.log(pattern.test(zip));

//Valid Phone Number Check

let phone   = '8801703085993';
let pattern = /^(\+8801|8801|01)[0-9]{9}$/;

console.log(pattern.test(phone));

//Valid User Name Check

let userName    = 'wahiorki@231';
let pattern     = /^[a-zA-Z\-@_]*[0-9]*/;

console.log(pattern.test(userName));


