//Remove all falsy values from an array

function bouncer(arr) {
  for(var i= arr.length; i--;) {
    if(Boolean(arr[i]) === false) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);
