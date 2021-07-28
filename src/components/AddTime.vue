<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="idttime"># Time</label>
        <input
          type="text"
          class="form-control"
          id="idttime"
          required
          v-model="time.idttime"
          name="idttime"
        />
      </div>

      <div class="form-group">
        <label for="sgltime">Sigla</label>
        <input
          class="form-control"
          id="sgltime"
          required
          v-model="time.sgltime"
          name="sgltime"
        />
      </div>

      <div class="form-group">
        <label for="dsctime">Nome</label>
        <input
          class="form-control"
          id="dsctime"
          required
          v-model="time.dsctime"
          name="dsctime"
        />
      </div>

      <button @click="saveTime" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Time cadastrado com sucesso!</h4>
      <button class="btn btn-success" @click="newTime">Add</button>
    </div>
  </div>
</template>

<script>
import TimeDataService from "../services/TimeDataService";

export default {
  name: "add-time",
  data() {
    return {
      time: {
        idttime: "",
        sgltime: "",
        dsctime: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTime(){
      var data = {
        idttime: this.time.idttime,
        sgltime: this.time.sgltime,
        dsctime: this.time.dsctime
      };

      TimeDataService.create(data)
        .then(response => {
          this.time.idttime = response.data.idttime;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTime() {
      this.submitted = false;
      this.time = {};
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