function where(arr, num) {
  arr = arr.sort(function(a,b) { return a-b; });
  var filteredArr = arr.filter(function(i) { return i>= num; });
  if(filteredArr.length === 0) { return arr.length; }
  else { return arr.indexOf(filteredArr[0]); }
}
