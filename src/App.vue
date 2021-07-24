<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">BR 21</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/songs" class="nav-link">Songs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addSong" class="nav-link">Add Song</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/temporadas" class="nav-link">Temporadas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addTemporada" class="nav-link">Nova Temporada</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/times" class="nav-link">Times</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addTime" class="nav-link">Novo Time</router-link>
        <li class="nav-item">
          <router-link to="/jogos" class="nav-link">Jogos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addJogo" class="nav-link">Novo Jogo</router-link>
        </li>                
      </div>
    </nav>	

    <div class="container mt-3">
      <router-view />
    </div>
	
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
