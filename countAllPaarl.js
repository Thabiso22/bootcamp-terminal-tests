//const assert =require("assert")
var countAllPaarl=function countAllPaarl(regList) {
  var list = regList.split(",");
  var regNumberCount = [];

  for (var i = 0; i < list.length; i++) {

    if (list[i].startsWith("CJ")) {
      regNumberCount.push(list[i]);
    }

  }
  return regNumberCount.length;



}
console.log(countAllPaarl("CJ 987-9876,CA 409-5439,CJ 932-6306"));
countAllPaarl("CJ 987-9876,CA 409-5439,CJ 932-6306");
//assert.equal(results,2);
module.exports= countAllPaarl;
