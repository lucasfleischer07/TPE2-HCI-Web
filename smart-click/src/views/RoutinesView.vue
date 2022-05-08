<template>
  <div class="routines-view">
    <div>
      <div class="title-padding">
        <h2 class="color-title">Mis rutinas</h2>
      </div>
      <v-row v-for="routine in house.routines" :key="routine.name">
        <v-col class="routines-button">
          <router-link :to="{name: 'routineDetailsView', params: {routineSlug: routine.slug}}">
            <v-btn color="purple lighten-1" large width="200" rounded >
              {{ routine.routineName }}
            </v-btn>
          </router-link>
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
      <h2 class="details-title color-title">Detalle de rutina</h2>
      <router-view :key="$route.path"/>
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
    },
  }

</script>



<style scoped>

  .color-title {
    color: gray;
  }

  .routines-view {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    min-height: 530px;
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
    background-color: gray;
  }

  .routines-add-button {
    display: flex;
  }

  .add-button-padding {
    padding-right: 20px;
    padding-bottom: 25px;
  }

  .routines-button {
    padding-top: 30px;
    text-decoration: none;

  }

  .details-title {
    padding-bottom: 25px;

  }

  a {
    text-decoration: none;
  }

</style>