<template>
  <div v-if="currentJogo" class="edit-form">
    <h4>Jogo</h4>
    <form>
      <div class="form-group">
        <label for="idttemporada">Temporada</label>
        <input type="text" class="form-control" id="idttemporada"
          v-model="currentJogo.idttemporada"
        />
      </div>
      <div class="form-group">
        <label for="dtajogo">Data e hora de realização</label>
        <input type="text" class="form-control" id="dtajogo"
          v-model="currentJogo.dtajogo"
        />
      </div>
      <div class="form-group">
        <label for="idttimemandante">Identificador Mandante</label>
        <input type="text" class="form-control" id="idttimemandante"
          v-model="currentJogo.idttimemandante"
        />
      </div>
      <div class="form-group">
        <label for="dsctimemandante">Mandante</label>
        <input type="text" class="form-control" id="dsctimemandante"
          v-model="currentJogo.dsctimemandante"
        />
      </div>
      <div class="form-group">
        <label for="vlrplacarmandante">Gols do Mandante</label>
        <input type="text" class="form-control" id="vlrplacarmandante"
          v-model="currentJogo.vlrplacarmandante"
        />
      </div>
      <div class="form-group">
        <label for="idttimevisitante">Identificador Visitante</label>
        <input type="text" class="form-control" id="idttimevisitante"
          v-model="currentJogo.idttimevisitante"
        />
      </div>
      <div class="form-group">
        <label for="dsctimevisitante">Visitante</label>
        <input type="text" class="form-control" id="dsctimevisitante"
          v-model="currentJogo.dsctimevisitante"
        />
      </div>
      <div class="form-group">
        <label for="vlrplacarvisitante">Gols do Visitante</label>
        <input type="text" class="form-control" id="vlrplacarvisitante"
          v-model="currentJogo.vlrplacarvisitante"
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
      Publicar
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteJogo"
    >
      Excluir
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateJogo"
    >
      Atualizar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione um jogo...</p>
  </div>
</template>

<script>
import JogoDataService from "../services/JogoDataService";

export default {
  name: "jogo",
  data() {
    return {
      currentJogo: null,
      message: ''
    };
  },
  methods: {
    getJogo(id) {
      JogoDataService.get(id)
        .then(response => {
          this.currentJogo = response.data[0];
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getJogoByTemporadaRodada(idtemp,idrod, id){
      JogoDataService.getByTemporadaRodada(idtemp,idrod, id)
        .then(response => {
          this.currentJogo = response.data[0];
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        idttemporada: this.currentJogo.idttemporada,
        dtajogo: this.currentJogo.dtajogo,
        dsclocal: this.currentJogo.dsclocal,

        idttimemandante: this.currentJogo.idttimemandante,
        dsctimemandante: this.currentJogo.dsctimemandante,
        vlrplacarmandante: this.currentJogo.vlrplacarmandante,

        idttimevitantes: this.currentJogo.idttimevitantes,
        dsctimevisitante: this.currentJogo.dsctimevisitante,
        vlrplacarvisitante: this.currentJogo.vlrplacarvisitante,

        published: status
      };

      JogoDataService.update(this.currentJogo.idjogo, data)
        .then(response => {
          this.currentJogo.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateJogo() {
      JogoDataService.update(this.currentJogo.idjogo, this.currentJogo)
        .then(response => {
          console.log(response.data);
          this.message = 'Os dados do jogo foram atualizados com sucesso';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteJogo() {
      JogoDataService.delete(this.currentJogo.idjogo)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "jogos" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getJogoByTemporadaRodada(this.$route.params.idtemp, this.$route.params.idrod, this.$route.params.id);
  }
};
</script> 

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>