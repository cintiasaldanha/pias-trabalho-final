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
      <h4>Times</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(time, index) in times"
          :key="index"
          @click="setActiveTime(time, index)"
        >
          {{ time.dsctime }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTimes">
        Excluir tudo
      </button>

    </div>
    <div class="col-md-6">
      <div v-if="currentTime">
        <h4>Time</h4>
        <div>
          <label><strong>Identificador:</strong></label> {{ currentTime.idttime }}
        </div>
        <div>
          <label><strong>Sigla:</strong></label> {{ currentTime.sgltime }}
        </div>
         <div>
          <label><strong>Nome:</strong></label> {{ currentTime.dsctime }}
        </div>                        
        <div>
        <button class="badge badge-success" @click="$router.push({name: 'time-details', params: { id: currentTime.idttime },})">Editar</button>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Selecione um time...</p>
      </div>
    </div>
  </div>
</template>

<script>

import TimeDataService from "../services/TimeDataService";

export default {
  name: "times-list",
  data() {
    return {
      times: [],
      currentTime: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTimes() {
      TimeDataService.getAll()
        .then(response => {
          this.times = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTimes();
      this.currentTime = null;
      this.currentIndex = -1;
    },

    setActiveTime(time, index) {
      this.currentTime = time;
      this.currentIndex = index;
    },

    removeAllTimes() {
      TimeDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TimeDataService.findByTitle(this.title)
        .then(response => {
          this.times = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTimes();
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