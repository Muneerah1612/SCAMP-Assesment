// Fibonacci sequence of a given number
const fib_seq = function(r)
{
    if (r===1)
    { return [0,1];}
    else {let a=fib_seq(r-1);
     a.push(a[a.length - 1] + a[a.length - 2]);
     return a;
    }

};
  console.log(fib_seq(8));