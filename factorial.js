function factorialize(num, total) {
  total = total || 1;
  if(num <= 1) {
    return total;
  }
  else {
    total *= num;
    num--;
    return factorialize(num, total);
  }
}
