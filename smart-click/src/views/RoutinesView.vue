<template>
  <div class="routines-view">
    <div>
      <div class="title-padding">
        <h2>Mis rutinas</h2>
      </div>
      <v-row v-for="routine in house.routines" :key="routine.name">
        <v-col
                       class="routines-botton">
          <v-btn color="purple lighten-1" large width="200" rounded >
            {{ routine.routineName }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="routines-add-button">
      <div class="add-button-padding">
        <v-btn color="primary" elevation="3" fab rounded ><v-icon>add</v-icon></v-btn>
      </div>
      <div class="vertical-line"></div>
    </div>

    <div>
      <h2>Detalle de rutina</h2>
    </div>
  </div>
</template>



<script>
import store from "@/store/store.js"

  export default {
    name: "RoutinesView",


    data() {
      return {
        house: store.house,
      }
    }
  }

</script>



<style scoped>
  .routines-view {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    min-height: 500px;
    padding-bottom: 20px;

  }

  .title-padding {
    padding-bottom: 25px;
  }

  .vertical-line{
    width: 2px;
    background-color: black;
    height: 100%;
    float: left;
    min-height: 480px;
  }

  .routines-add-button {
    display: flex;
  }

  .add-button-padding {
    padding-right: 20px;
    padding-bottom: 25px;
  }

  .routines-botton {
    padding-top: 30px;

  }

</style>