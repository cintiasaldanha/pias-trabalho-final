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
      <h4>Músicas</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(song, index) in songs"
          :key="index"
          @click="setActiveSong(song, index)"
        >
          {{ song.SongName }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllSongs">
        Remove All
      </button>

    </div>
    <div class="col-md-6">
      <div v-if="currentSong">
        <h4>Song</h4>
        <div>
          <label><strong>Música:</strong></label> {{ currentSong.SongName }}
        </div>
        <div>
          <label><strong>Artista:</strong></label> {{ currentSong.ArtistName }}
        </div>
         <div>
          <label><strong># Episódio:</strong></label> {{ currentSong.NumberEpisode }}
        </div>       
        <div>
          <label><strong>Nome Episódio:</strong></label> {{ currentSong.NameEpisode }}
        </div>        
        <div>
          <label><strong># Temporada:</strong></label> {{ currentSong.NumberSeason }}
        </div>
        <div>
          <label><strong># ID:</strong></label> {{ currentSong._id }}
        </div>            
        <div>
        <button class="badge badge-primary mr-2" @click="$router.push({name: 'song-details', params: { id: currentSong._id },})">Editar</button>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Selecione uma música...</p>
      </div>
    </div>
  </div>
</template>

<script>

import SongDataService from "../services/SongDataService";

export default {
  name: "songs-list",
  data() {
    return {
      songs: [],
      currentSong: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSongs() {
      SongDataService.getAll()
        .then(response => {
          this.songs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSongs();
      this.currentSong = null;
      this.currentIndex = -1;
    },

    setActiveSong(song, index) {
      this.currentSong = song;
      this.currentIndex = index;
    },

    removeAllSongs() {
      SongDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      SongDataService.findByTitle(this.title)
        .then(response => {
          this.songs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveSongs();
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