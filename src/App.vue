<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/fibonacci">Fibonacci sequence</router-link>
      <router-link to="/todo">To Do</router-link>
      <router-link to="/count-down">Count Down</router-link>
      <router-link to="/viewport-component">Viewport component</router-link>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">
@import "./src/assets/css/main.scss"

</style>
