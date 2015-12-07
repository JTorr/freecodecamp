function truncate(str, num) {
  Clear out that junk in your trunk
    if(num <= 3) {
      return str.replace(str.slice(num), "...");
    }
    else if(num >= str.length) {
      return str;
    }
    else {
      return str.replace(str.slice(num -3), "...");
    }
}
