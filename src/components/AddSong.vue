<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="SongName">SongName</label>
        <input
          type="text"
          class="form-control"
          id="SongName"
          required
          v-model="song.SongName"
          name="SongName"
        />
      </div>

      <div class="form-group">
        <label for="ArtistName">ArtistName</label>
        <input
          class="form-control"
          id="ArtistName"
          required
          v-model="song.ArtistName"
          name="ArtistName"
        />
      </div>

      <div class="form-group">
        <label for="NumberEpisode">NumberEpisode</label>
        <input
          class="form-control"
          id="NumberEpisode"
          required
          v-model="song.NumberEpisode"
          name="NumberEpisode"
        />
      </div>

      <div class="form-group">
        <label for="NameEpisode">NameEpisode</label>
        <input
          class="form-control"
          id="NameEpisode"
          required
          v-model="song.NameEpisode"
          name="NameEpisode"
        />
      </div>

      <div class="form-group">
        <label for="NumberSeason">NumberSeason</label>
        <input
          class="form-control"
          id="NumberSeason"
          required
          v-model="song.NumberSeason"
          name="NumberSeason"
        />
      </div>

      <button @click="saveSong" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSong">Add</button>
    </div>
  </div>
</template>

<script>
import SongDataService from "../services/SongDataService";

export default {
  name: "add-song",
  data() {
    return {
      song: {
        _id: null,
        SongName: "",
        ArtistName: "",
        NumberEpisode: "",
        NameEpisode: "",
        NumberSeason: ""
      },
      submitted: false
    };
  },
  methods: {
    saveSong() {
      var data = {
        SongName: this.song.SongName,
        ArtistName: this.song.ArtistName,
        NumberEpisode: this.song.NumberEpisode,
        NameEpisode: this.song.NameEpisode,
        NumberSeason: this.song.NumberSeason
      };

      SongDataService.create(data)
        .then(response => {
          this.song.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newSong() {
      this.submitted = false;
      this.song = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>