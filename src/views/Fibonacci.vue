<template>
  <div class="app-container">
    <h1>Fibonacci you glorius bastard !</h1>

    <div class="img-wrapper">
      <img src="../assets/img/fibonacci.jpg" alt="Fibonacci">
    </div>

    <p>Enter a number in a input field, and Fibonacci's sequence will magically stop before hitting that number.</p>
    <p>Witchcraft !!!</p>

    <div class="input-container">
      <input id="input-limiter" type="number" v-model="fibonacciLimit">
      <button @click="startSequence">Go Fibonacci Go</button>
    </div>

    <div id="result-container">
      <h1>And here is the sequnece:</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: 'fibonacci',

  data() {
    return {
      fibonacciLimit: Number,
      fibonacciX: 1,
      fibonacciY: 0,
      fibonacciZ: 0,
      fibonacciSeqNum: 0
    }
  },

  methods: {
    startSequence() {
      debugger;
      if (document.getElementById('input-limiter').value == '') {
        alert("Put a number in input field....we don't wanna overdo it :) !!!");

        return;
      }

      this.fibonacciZ = this.fibonacciX;
      this.fibonacciX = this.fibonacciX + this.fibonacciY;
      this.fibonacciY = this.fibonacciZ;

      this.fibonacciSeqNum = this.fibonacciZ--;

      if ( this.fibonacciSeqNum >= this.fibonacciLimit ) {
        return console.log('Done !!!');
      
      } else {
        this.createElement();
        this.startSequence();
      }

    },
    createElement() {
      let sequenceNumber = document.createElement('p');
      sequenceNumber.innerHTML = this.fibonacciSeqNum;

      document.getElementById('result-container').appendChild(sequenceNumber);
    }
  }
}
</script>

<style lang="scss">
  .img-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }

  input {
    margin-right: 20px;
  }

  .input-container {
    margin-bottom: 20px;
  }

  #result-container {
    p {
      display: inline-block;
      margin-right: 10px;

      &:after {
        content: ",";
      }

      &:last-child:after {
        content: "";
      }
    }
  }
</style>
