const moment = require('moment-timezone');
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("[Today is ]dddd, Z"));

console.log(moment.tz.countries());