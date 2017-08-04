

//const assert = require ("assert");
var greet=function greet(name) {
    return ("hello" + name);
}

console.log (greet("John"));
//assert.equal(greet("John"),"helloJohn");
module.exports=greet;
