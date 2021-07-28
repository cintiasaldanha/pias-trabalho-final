<template>
  <div v-if="currentTemporada" class="edit-form">
    <h4>Temporada</h4>
    <form>
      <div class="form-group">
        <label for="idtemporada">Temporada</label>
        <input type="text" class="form-control" id="idTemporada"
          v-model="currentTemporada.idtemporada"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
         "Pending" 
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTemporada.published"
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
      @click="deleteTemporada"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTemporada"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione a temporada...</p>
  </div>
</template>

<script>
import TemporadaDataService from "../services/TemporadaDataService";

export default {
  name: "temporada",
  data() {
    return {
      currentTemporada: null,
      message: ''
    };
  },
  methods: {
    getTemporada(id) {
      TemporadaDataService.get(id)
        .then(response => {
          this.currentTemporada = response.data[0];
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        idtemporada: this.currentTemporada.idtemporada,
      };

      TemporadaDataService.update(this.currentTemporada.idtemporada, data)
        .then(response => {
          this.currentTemporada.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTemporada() {
      TemporadaDataService.update(this.currentTemporada.idtemporada, this.currentTemporada)
        .then(response => {
          console.log(response.data);
          this.message = 'Temporada atualizada com sucesso!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTemporada() {
      TemporadaDataService.delete(this.currentTemporada.idtemporada)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "temporadas" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTemporada(this.$route.params.id);
  }
};
</script> 

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>