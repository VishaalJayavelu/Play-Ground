var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
var simple = require(lib + '/maths.js');

module.exports = {
	add : simple.add,
	sub : simple.sub,
	mul : simple.mul,
	div : simple.div,
     mod : simple.mod,
     pow : simple.pow,
	fact : simple.fact,
     sqr : simple.sqr,
     cub : simple.cub
}

/*import {sum,sub,mul,div,mod,pow,fact,sqr,cub} from './mod/maths.mjs';

console.log(sum(5,10));
console.log(sub(5,10));

console.log(mul(5,10));
console.log(mul(5,2));
console.log(mul(5,3));

console.log(pow(5,10));
console.log(sqr(5));
console.log(cub(5));

console.log(fact(5));

console.log(div(5,10));
console.log(mod(5,10));
*/