var str =  '{"data": { "rates": { "asa": "8769" , "add" : "9075"}}}';

let obj = JSON.parse(str);

console.log(obj.data.rates.asa);