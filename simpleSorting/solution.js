var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var array = line.split(' ').map(Number);
  array.sort(function(a, b) {
    if (a === b) {
      return 0;
    } else if (a > b) {
      return 1;
    }
    return -1;
  });
  return array.join(' ');
}
