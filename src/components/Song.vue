<template>
  <div v-if="currentSong" class="edit-form">
    <h4>Song</h4>
    <form>
      <div class="form-group">
        <label for="SongName">Nome da Música</label>
        <input type="text" class="form-control" id="SongName"
          v-model="currentSong.SongName"
        />
      </div>
      <div class="form-group">
        <label for="ArtistName">Artista</label>
        <input type="text" class="form-control" id="ArtistName"
          v-model="currentSong.ArtistName"
        />
      </div>
      <div class="form-group">
        <label for="NumberEpisode "># Episódio</label>
        <input type="text" class="form-control" id="NumberEpisode "
          v-model="currentSong.NumberEpisode"
        />
      </div>
      <div class="form-group">
        <label for="NameEpisode">Nome Episódio</label>
        <input type="text" class="form-control" id="NameEpisode"
          v-model="currentSong.NameEpisode"
        />
      </div> 
      <div class="form-group">
        <label for="NumberSeason"># Temporada</label>
        <input type="text" class="form-control" id="NumberSeason"
          v-model="currentSong.NumberSeason"
        />
      </div>           
      <div class="form-group">
        <label for="_ID"># ID:</label>
        <input type="text" class="form-control" id="_ID"
          v-model="currentSong._ID"
        />
      </div>  
      <div class="form-group">
        <label><strong>Status:</strong></label>
         "Pending" 
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentSong.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteSong"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateSong"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Song Vue...</p>
  </div>
</template>

<script>
import SongDataService from "../services/SongDataService";

export default {
  name: "song",
  data() {
    return {
      currentSong: null,
      message: ''
    };
  },
  methods: {
    getSong(id) {
      SongDataService.get(id)
        .then(response => {
          this.currentSong = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentSong._id,
        SongName: this.currentSong.SongName,
        ArtistName: this.currentSong.ArtistName,
        NumberEpisode: this.currentSong.NumberEpisode,
        NameEpisode: this.currentSong.NameEpisode,
        NumberSeason: this.currentSong.NumberSeason,
        published: status
      };

      SongDataService.update(this.currentSong._id, data)
        .then(response => {
          this.currentSong.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateSong() {
      SongDataService.update(this.currentSong._id, this.currentSong)
        .then(response => {
          console.log(response.data);
          this.message = 'The song was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteSong() {
      SongDataService.delete(this.currentSong._id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "songs" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getSong(this.$route.params.id);
  }
};
</script> 

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>