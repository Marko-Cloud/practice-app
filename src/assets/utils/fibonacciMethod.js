function fibonacciSequence(value) {
    debugger;
    let fibonacciArray = [];
    let limiterNum = Number(value);
  
    function fibonacci_series(n) {
      if (n === 1) {
        fibonacciArray = [0, 1];
      } 
      else {
        let s = fibonacci_series(n - 1);
        let lastNum = fibonacciArray[fibonacciArray.length - 1];

        s.push(s[s.length - 1] + s[s.length - 2]);
        fibonacciArray = s;
      }
    }; // pozovi funkciju i limitiraj ju

    console.log(fibonacciArray, limiterNum);

    // I stole this part and made function aboe to suit my needs
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

    // console.log(fibonacci_series(8));
}

export default fibonacciSequence;
