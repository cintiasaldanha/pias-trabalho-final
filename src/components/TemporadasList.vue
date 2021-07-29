<template>
  <div class="list row">
    <!--
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
    -->
    <div class="col-md-6">
      <h4>Temporadas</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(temporada, index) in temporadas"
          :key="index"
          @click="setActiveTemporada(temporada, index)"
        >
          {{ temporada.idtemporada }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTemporadas">
        Excluir tudo
      </button>

    </div>
    <div class="col-md-6">
      <div v-if="currentTemporada">
        <h4>Temporada</h4>
        <div>
          <label><strong>Temporada:</strong></label> {{ currentTemporada.idtemporada }}
        </div>          
        <div>
       
        <button class="badge badge-success" @click="$router.push({name: 'temporada-details', params: { id: currentTemporada.idtemporada },})">Editar</button>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Selecione uma temporada...</p>
      </div>
    </div>
  </div>
</template>

<script>

import TemporadaDataService from "../services/TemporadaDataService";

export default {
  name: "temporadas-list",
  data() {
    return {
      temporadas: [],
      currentTemporada: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTemporadas() {
      TemporadaDataService.getAll()
        .then(response => {
          this.temporadas = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTemporadas();
      this.currentTemporada = null;
      this.currentIndex = -1;
    },

    setActiveTemporada(temporada, index) {
      this.currentTemporada = temporada;
      this.currentIndex = index;
    },

    removeAllTemporadas() {
      TemporadaDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TemporadaDataService.findByTitle(this.title)
        .then(response => {
          this.temporada = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTemporadas();
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