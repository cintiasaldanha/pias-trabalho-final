<template>

  <div class="submit-form">
    <h4>Insira os dados para cadastrar um novo jogo</h4>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="idjogo"># Jogo</label>
        <input
          type="text"
          class="form-control"
          id="idjogo"
          required
          v-model="jogo.idjogo"
          name="idjogo"
        />
      </div>

      <div class="form-group">
        <label for="idttemporada">Temporada</label>
        <input
          class="form-control"
          id="idttemporada"
          required
          v-model="jogo.idttemporada"
          name="idttemporada"
        />
      </div>

      <div class="form-group">
        <label for="rodada"># Rodada</label>
        <input
          class="form-control"
          id="rodada"
          required
          v-model="jogo.rodada"
          name="rodada"
        />
      </div>

      <div class="form-group">
        <label for="dtajogo">Data e Horário de Realização</label>
        <input
          class="form-control"
          id="dtajogo"
          required
          v-model="jogo.dtajogo"
          name="dtajogo"
        />
      </div>

      <div class="form-group">
        <label for="idttimemandante">Identificador Time Mandante</label>
        <input
          class="form-control"
          id="idttimemandante"
          required
          v-model="jogo.idttimemandante"
          name="idttimemandante"
        />
      </div>

      <div class="form-group">
        <label for="dsctimemandante">Nome Time Mandante</label>
        <input
          class="form-control"
          id="dsctimemandante"
          required
          v-model="jogo.dsctimemandante"
          name="dsctimemandante"
        />
      </div>

      <div class="form-group">
        <label for="vlrplacarmandante"># Gols Time Mandante</label>
        <input
          class="form-control"
          id="vlrplacarmandante"
          required
          v-model="jogo.vlrplacarmandante"
          name="vlrplacarmandante"
        />
      </div>

     <div class="form-group">
        <label for="idttimevisitante">Identificador Time Visitante</label>
        <input
          class="form-control"
          id="idttimevisitante"
          required
          v-model="jogo.idttimevisitante"
          name="idttimevisitante"
        />
      </div>

      <div class="form-group">
        <label for="dsctimevisitante">Nome Time Visitante</label>
        <input
          class="form-control"
          id="dsctimevisitante"
          required
          v-model="jogo.dsctimevisitante"
          name="dsctimevisitante"
        />
      </div>

      <div class="form-group">
        <label for="vlrplacarvisitante"># Gols Time Visitante</label>
        <input
          class="form-control"
          id="vlrplacarvisitante"
          required
          v-model="jogo.vlrplacarvisitante"
          name="vlrplacarvisitante"
        />
      </div>

      <button @click="saveJogo" class="btn btn-success">Cadastrar</button>
    </div>

    <div v-else>
      <h4>Jogo cadastrado com sucesso!</h4>
      <button class="btn btn-success" @click="newJogo">Novo jogo</button>
    </div>
  </div>
</template>

<script>
import JogoDataService from "../services/JogoDataService";

export default {
  name: "add-jogo",
  data() {
    return {
      jogo: {
        idjogo: null,
        idttemporada: null,
        rodada: null,
        dtajogo: "",
        idttimemandante: "",
        dsctimemandante: "",
        vlrplacarmandante: null,
        idttimevisitante: "",
        dsctimevisitante: "",
        vlrplacarvisitante: null
      },
      submitted: false
    };
  },
  methods: {
    saveJogo() {
      var data = {
        idjogo: parseInt(this.jogo.idjogo),
        idttemporada: parseInt(this.jogo.idttemporada),
        rodada: parseInt(this.jogo.rodada),
        dtajogo: this.jogo.dtajogo,
        idttimemandante: this.jogo.idttimemandante,
        dsctimemandante: this.jogo.dsctimemandante,
        vlrplacarmandante: parseInt(this.jogo.vlrplacarmandante),
        idttimevisitante: this.jogo.idttimevisitante,
        dsctimevisitante: this.jogo.dsctimevisitante,
        vlrplacarvisitante: parseInt(this.jogo.vlrplacarvisitante)
      };

      JogoDataService.create(data)
        .then(response => {
          this.jogo.id = response.jogo.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newJogo() {
      this.submitted = false;
      this.jogo = {};
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