//Problem 1: Multiples of 3 and 5//

var sum = 0;

for(var i=0; i<1000; i++){
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
  console.log(i, sum);
}