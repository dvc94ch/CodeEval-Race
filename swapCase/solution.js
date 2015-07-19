var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var upper = line.toUpperCase();
  var lower = line.toLowerCase();
  return line.split('').map(function(char, i) {
    if (char === upper[i]) {
      return lower[i];
    } else {
      return upper[i];
    }
  }).join('');
}
