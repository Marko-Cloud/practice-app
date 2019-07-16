<template>
  <div class="app-container">
    <h1>Fibonacci you glorius bastard !</h1>

    <div class="img-wrapper">
      <img src="../assets/img/fibonacci.jpg" alt="Fibonacci">
    </div>

    <p>So, task here will be to make a Fibonacci's sequence as a reqursive function. </p>
    <p>It will stop before hitting the number you enter in input field.</p>

    <p>And ofcourse i will show the output.</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'fibonacci',

  components: {

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
</style>
