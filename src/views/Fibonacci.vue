<template>
  <div class="app-container">
    <h1>Fibonacci you glorius bastard !</h1>

    <div class="img-wrapper">
      <img src="../assets/img/fibonacci.jpg" alt="Fibonacci">
    </div>

    <p>Enter a number in a input field and you will get equal amount of numbers from Fibonacci sequence.</p>
    <p>Witchcraft !!!</p>

    <div class="input-container">
      <input id="input-limiter" type="number" v-model="fibonacciLimit">
      <button @click="startSequenceExternaly">Go Fibonacci Go</button>
      <!-- <button @click="startSequenceLocaly">Go Fibonacci Go</button> -->
    </div>

    <div id="result-container">
      <h1>And here is the sequnece:</h1>
      <p v-for="item in fibonacciNumbersArray">{{item}}</p>
    </div>
  </div>
</template>

<script>

import fibonacciSequence from '../assets/utils/fibonacciMethod';

export default {
  name: 'fibonacci',

  data() {
    return {
      fibonacciLimit: null,

      // We use this for externall function
      fibonacciNumbersArray: [],
      
      // we use this one for local function
      // fibonacciX: 1,
      // fibonacciY: 0,
      // fibonacciZ: 0
    }
  },

  methods: {
    // For purpose sake i made one methode as utility function.....separating stuff....because of....reasons
    startSequenceExternaly() {
      this.fibonacciNumbersArray = [];

      if (this.fibonacciLimit == null) {
        alert("Put a number in input field....we don't wanna overdo it with infinite loop :) !!!");

        return;
      }

      if (this.fibonacciLimit == 1) {
        alert("Awwww jizz....do more than 1");

        return;
      }

      fibonacciSequence(this.fibonacciLimit);

      if (sessionStorage.getItem("fibonacciArray") !== null) {
        this.fibonacciNumbersArray = JSON.parse(sessionStorage.getItem("fibonacciArray"));

        console.log(this.fibonacciNumbersArray);
      }
    },

    // This one is local function ... uncoment for local version of Fibonacci function
    // startSequenceLocaly() {
    //   debugger;
    //   if (document.getElementById('input-limiter').value == '') {
    //     alert("Put a number in input field....we don't wanna overdo it :) !!!");

    //     return;
    //   }

    //   if (this.fibonacciZ == 0) {
    //     this.createElement();

    //     this.fibonacciZ = 1;
    //     this.startSequenceLocaly();
    //   }

    //   this.fibonacciZ = this.fibonacciX;

    //   this.fibonacciX = this.fibonacciX + this.fibonacciY;

    //   this.fibonacciY = this.fibonacciZ;

    //   if ( this.fibonacciZ >= this.fibonacciLimit ) {
    //     return console.log('Done !!!');
      
    //   } else {
    //     this.createElement();
    //     this.startSequenceLocaly();
    //   }

    // },
    // createElement() {
    //   let sequenceNumber = document.createElement('p');
    //   sequenceNumber.innerHTML = this.fibonacciZ;

    //   document.getElementById('result-container').appendChild(sequenceNumber);
    // }
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
