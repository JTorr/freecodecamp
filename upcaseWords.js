function titleCase(str) {
  var arr = str.split(" ");
  var upcased = arr.map(function(word) { word = word.toLowerCase(); var char = word.charAt(0); return word.replace(char, char.toUpperCase()); });
  return upcased.join(" ");
}
