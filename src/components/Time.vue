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
        <label><strong>Status:</strong></label>
         "Pending" 
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTime.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publicar
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTime"
    >
      Excluir
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTime"
    >
      Atualizar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione um time...</p>
  </div>
</template>

<script>
import TimeDataService from "../services/TimeDataService";

export default {
  name: "time1",
  data() {
    return {
      currentTime: null,
      message: ''
    };
  },
  methods: {
    getTime(id) {
      TimeDataService.get(id)
        .then(response => {
          this.currentTime = response.data[0];
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
        published: status
      };

      TimeDataService.update(this.currentTime.idttime, data)
        .then(response => {
          this.currentTime.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTime() {
      TimeDataService.update(this.currentTime.idttime, this.currentTime)
        .then(response => {
          console.log(response.data);
          this.message = 'Os dados do time foram atualizados com sucesso!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTime() {
      TimeDataService.delete(this.currentTime.idttime)
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