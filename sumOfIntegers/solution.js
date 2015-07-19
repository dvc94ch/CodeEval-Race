var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

console.log(fs.readFileSync(filename).toString().split('\n').map(Number).reduce(function(acc, sum) {
  return acc + sum;
}));

function solution(line){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
  return line;
}
