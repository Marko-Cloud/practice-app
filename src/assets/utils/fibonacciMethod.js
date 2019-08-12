function fibonacciSequence(value) {

    let fibonacciArray = [];
    let limiterNum = Number(value);
    function fibonacci_series(n) {
      debugger;

      if (n === 1) {
        return [0, 1];
      } else {
        let s = fibonacci_series(n - 1);

        if (s.length === limiterNum) {
          fibonacciArray = s;
          sessionStorage.setItem("fibonacciArray", JSON.stringify(fibonacciArray));

          return fibonacciArray;
        }

        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    };
    fibonacci_series(limiterNum);

    // I stole this part and made function above to suit my needs
    // var fibonacci_series = function (n) 
    // {
    //   if (n===1) 
    //   {
    //     return [0, 1];
    //   } 
    //   else 
    //   {
    //     var s = fibonacci_series(n - 1);
    //     s.push(s[s.length - 1] + s[s.length - 2]);
    //     return s;
    //   }
    // };
}

export default fibonacciSequence;
