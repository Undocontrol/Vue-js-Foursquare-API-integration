<!--
File Overview
* The app "bootstrapper". Loads and assembles the app together. 
-->
<template>
  <div id="app">
      <!--router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  position:relative;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
