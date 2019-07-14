<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/fibonacci">Fibonacci app</router-link>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">
@import "./src/assets/css/main.scss"

</style>
