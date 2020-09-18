<template>
  <div id="app">
    <img class = 'home-logo' src="./assets/question.png" alt="">
    <div class="d-flex justify-content-center align-items-center container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home-logo {
  width: 16rem; 
  height:15rem;
}

</style>
