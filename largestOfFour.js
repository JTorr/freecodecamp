function largestOfFour(arr) {
    return arr.map(function(subarr) { return Math.max.apply(null, subarr); });
}

