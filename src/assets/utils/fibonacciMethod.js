function fibonacciSequence(value) {
    debugger;
    let x = 1, y = 0, z = 0;

    if (z == 0) {
        z = 1;
        fibonacciSequence();
      }

      z = x;

      x = x + y;

      y = z;

      if ( z >= value ) {
        return console.log('Done !!!');
      
      } else {
            console.log(z);
            fibonacciSequence();
      }
}

export default fibonacciSequence;
