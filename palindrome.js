function palindrome(str) {
  str = str.replace(/[\W_]/gi, "");
  str = str.toLowerCase();
  arr = str.split("");
  reversed = arr.reverse();
  if(reversed.join("") == str) { return true; }
  return false;
}
