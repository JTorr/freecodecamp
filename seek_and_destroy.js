function destroyer(arr) {
  var array = arguments[0];
  for(i=1; i < arguments.length; i++) {
    for(x=0; x < array.length; x++) {
      if(array[x] === arguments[i]) {
        array.splice(x, 1);
        x--;
      }
    }
  }
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
