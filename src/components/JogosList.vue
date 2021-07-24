<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Jogos</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(jogo, index) in jogos"
          :key="index"
          @click="setActiveJogo(jogo, index)"
        >
          {{ jogo.dsctimemandante + " " + vlrplacarmandante + " x " + vlrplacarvisitante + " "+ jogo.dsctimevisitante}}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllJogos">
        Remove All
      </button>

    </div>
    <div class="col-md-6">
      <div v-if="currentJogo">
        <h4>Jogo</h4>
        <div>
          <label><strong>Temporada:</strong></label> {{ currentJogo.idttemporada }}
        </div>
        <div>
          <label><strong>Data e hora de realização:</strong></label> {{ currentJogo.dtajogo }}
        </div>
         <div>
          <label><strong>Local:</strong></label> {{ currentJogo.dsclocal }}
        </div>       
        <div>
          <label><strong>Mandante:</strong></label> {{ currentJogo.idttimemandante }} + " " + {{ currentJogo.dsctimemandante }}
        </div>        
        <div>
          <label><strong>Gols Mandante:</strong></label> {{ currentJogo.vlrplacarmandante }}
        </div>
        <div>
          <label><strong>Visitante:</strong></label> {{ currentJogo.idttimevisitante }} + " " + {{ currentJogo.dsctimevisitante }}
        </div>        
        <div>
          <label><strong>Gols Visitante:</strong></label> {{ currentJogo.vlrplacarvisitante }}
        </div>
        <div>
          <label><strong># ID:</strong></label> {{ currentJogo._idjogo }}
        </div>            
        <div>

        <button class="badge badge-success" @click="$router.push({name: 'jogo-details', params: { id: currentJogo.idtJogo },})">Editar</button>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Selecione um jogo...</p>
      </div>
    </div>
  </div>
</template>

<script>

import JogosDataService from "../services/JogosDataService";

export default {
  name: "jogos-list",
  data() {
    return {
      jogos: [],
      currentJogo: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveJogos() {
      JogosDataService.getAll()
        .then(response => {
          this.jogos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveJogos();
      this.currentJogo = null;
      this.currentIndex = -1;
    },

    setActiveJogo(jogo, index) {
      this.currentJogo = jogo;
      this.currentIndex = index;
    },

    removeAllJogos() {
      JogosDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      JogosDataService.findByTitle(this.title)
        .then(response => {
          this.jogos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveJogos();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>