const countAllFromTown = require('../countAllFromTown.js');
const assert = require('assert');
describe("countAllFromTown" ,function(){
it("should return 'results' when given 'CL 124,CY 567,CL 345,CJ 456,CL 341','CL'", function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
});
});
