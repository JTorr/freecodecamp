function chunk(arr, size) {
  new_arr = [];
  while(arr.length > 1) {
    new_arr.push(arr.splice(0, size));
  }
  if(arr.length < size && arr.length > 0) { new_arr.push(arr);
  }
  return new_arr;
}
