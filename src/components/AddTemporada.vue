<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="idtemporada">Temporada</label>
        <input
          type="text"
          class="form-control"
          id="idtemporada"
          required
          v-model="temporada.idtemporada"
          name="idtemporada"
        />
      </div>
      <button @click="saveTemporada" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Informações enviadas com sucesso!</h4>
      <button class="btn btn-success" @click="newTemporada">Add</button>
    </div>
  </div>
</template>

<script>
import TemporadaDataService from "../services/TemporadaDataService";

export default {
  name: "add-temporada",
  data() {
    return {
      temporada: {
        idttemporada: null,
      },
      submitted: false
    };
  },
  methods: {
    saveTemporada() {
     window.alert("save temporada");
     
     var data = {
        idtemporada: this.temporada.idtemporada
      };   

      TemporadaDataService.create(data)
        .then(response => {        
          this.temporada.idtemporada= response.data.idtemporada;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTemporada() {
      this.submitted = false;
      this.temporada = {};
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