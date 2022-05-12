<template>
  <div>
    <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large
           @click.stop="houseAdd = true" rounded>
      <div class="icon-div">
        Agregar Casa
        <v-icon large>house</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="houseAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="addHouse(nombreCasa)">
        <v-card-title>
          <h2>Agregue una nueva casa</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nombre de nueva casa"
              :rules="rules"
              hide-details="auto"
              v-model="nombreCasa"
          />
          <v-btn class="margin-button" color="primary" @click="addHouse(nombreCasa)">
            Agregar Casa
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "AddHouse",
  data() {
    return {

      houses: store.houses,
      houseAdd: false,
      nombreCasa: "",

      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
  methods: {
    addHouse(text) {
      if (text === "")
        console.log("Mal nombre de casa")
      else {
        //AGREGAR CASA
        this.houseAdd = false
        this.nombreCasa = ""
      }
    },
  }

}



</script>

<style scoped>

/*  .buttons {*/
/*    display: flex;*/
/*    justify-content: space-evenly;*/
/*    padding-bottom: 50px;*/
/*    font-size: 40px;*/
/*  }*/

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-top: 20px;
  }

</style>