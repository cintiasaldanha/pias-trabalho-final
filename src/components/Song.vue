<template>
  <div v-if="currentSong" class="edit-form">
    <h4>Song</h4>
    <form>
      <div class="form-group">
        <label for="SongName">SongName</label>
        <input type="text" class="form-control" id="SongName"
          v-model="currentSong.SongName"
        />
      </div>
      <div class="form-group">
        <label for="ArtistName">ArtistName</label>
        <input type="text" class="form-control" id="ArtistName"
          v-model="currentSong.ArtistName"
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
    <p>Please click on a Song...</p>
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
        title: this.currentSong.SongName,
        description: this.currentSong.ArtistName,
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
    this.getSong(this.$route.params._id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>