<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">BR 21</router-link>
      <div class="navbar-nav mr-auto">
       <!-- <li class="nav-item">
          <router-link to="/songs" class="nav-link">Songs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addSong" class="nav-link">Add Song</router-link>
        </li>-->
        <li class="nav-item">
          <router-link to="/temporadas" class="nav-link">Temporadas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/times" class="nav-link">Times</router-link>
        </li>        
        <li class="nav-item">
          <router-link to="/jogos" class="nav-link">Jogos</router-link>
        </li>       
        <li class="nav-item">
          <router-link to="/addTemporada" class="nav-link">Nova Temporada</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addJogo" class="nav-link">Novo Jogo</router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/addTime" class="nav-link">Novo Time</router-link>
        </li>
              
      </div>
    </nav>
        <Home msg="Bom Dia Lavras"/>	

    <div class="container mt-3">
      <router-view />
    </div>
	
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2b900;
  margin-top: 0px;
  background-color: #2b2128;
  background-image: url('./assets/mineirao6.jpg');
}
</style>
