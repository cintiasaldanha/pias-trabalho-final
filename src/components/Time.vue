<template>
  <div v-if="currentTime" class="edit-form">
    <h4>Time</h4>
    <form>
      <div class="form-group">
        <label for="dsctime">Nome:</label>
        <input type="text" class="form-control" id="dsctime"
          v-model="currentTime.dsctime"
        />
      </div>
      <div class="form-group">
        <label for="idttime">Identificador:</label>
        <input type="text" class="form-control" id="idttime"
          v-model="currentTime.idttime"
        />
      </div>
      <div class="form-group">
        <label for="sgltime">Sigla:</label>
        <input type="text" class="form-control" id="sgltime"
          v-model="currentTime.sgltime"
        />
      </div>
      <div class="form-group">
        <label for="imgescudo">Imagem:</label>
        <input type="text" class="form-control" id="imgescudo"
          v-model="currentTime.imgescudo"
        />
      </div>      
      <div class="form-group">
        <label><strong>Status:</strong></label>
         "Pending" 
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentJogo.published"
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
      @click="deleteJogo"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateJogo"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione um time...</p>
  </div>
</template>

<script>
import TimesDataService from "../services/TimesDataService";

export default {
  name: "time",
  data() {
    return {
      currentTime: null,
      message: ''
    };
  },
  methods: {
    getTime(id) {
      TimesDataService.get(id)
        .then(response => {
          this.currentTime = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        idttime: this.currentTime.idttime,
        dsctime: this.currentTime.dsctime,
        sgltime: this.currentTime.sgltime,
        imgescudo: this.currentTime.imgescudo,
        published: status
      };

      TimesDataService.update(this.currentTime._id, data)
        .then(response => {
          this.currentTime.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTime() {
      TimesDataService.update(this.currentTime._id, this.currentTime)
        .then(response => {
          console.log(response.data);
          this.message = 'Os dados do time foram atualizados com sucesso!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTime() {
      TimesDataService.delete(this.currentTime._id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "times" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTime(this.$route.params.id);
  }
};
</script> 

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>