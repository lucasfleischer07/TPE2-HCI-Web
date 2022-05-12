<template>
  <div class="routines-view">
    <div>
      <div class="title-padding">
        <h2 class="color-title">Mis rutinas</h2>
      </div>
      <v-row v-for="routine in house.routines" :key="routine.name">
        <v-col class="routines-button">
          <div>
          <router-link :to="{name: 'routineDetailsView', params: {routineSlug: routine.slug}}">
              <v-btn color="success" large width="250" rounded >{{ routine.routineName }}</v-btn>
          </router-link>
            <v-btn class="delete-button" color="error" elevation="3" fab rounded small><v-icon>delete_forever</v-icon></v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="routines-add-button">
      <AddRoutineRound/>
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
  import AddRoutineRound from "@/components/addingComponents/AddRoutineRound";
  // import RemoveRoutine from "@/components/addingComponents/RemoveRoutine";

  export default {
    name: "RoutinesView",
    components: {
      AddRoutineRound,
      // RemoveRoutine
    },


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
    padding-top: 20px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
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
    margin-left: 5px;
  }

  .routines-add-button {
    display: flex;
  }

  .routines-button {
    padding-top: 30px;
    text-decoration: none;

  }

  .details-title {
    padding-bottom: 25px;

  }

  .delete-routine-button-and-title {
    display: flex;
    justify-content: space-between;
  }

  .delete-button {
    margin-left: 200px;
  }

  a {
    text-decoration: none;
  }

</style>