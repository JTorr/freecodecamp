function findLongestWord(str) {
  var arr = str.split(" ");
  return Math.max.apply(null, arr.map(function(val) { return val.length; }));
}
