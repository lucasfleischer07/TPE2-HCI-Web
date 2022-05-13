<template>
  <div class="routines-view">
    <div>
      <div class="title-padding">
        <h2 class="color-title">Mis rutinas</h2>
        <div class="button-with-text">
          <AddRoutineRound/>
          <span class="text">AGREGAR RUTINA</span>
        </div>
      </div>
      <v-row v-for="routine in house.routines" :key="routine.name">
        <v-col class="routines-button">
          <div class="delete-routine-div">
          <router-link :to="{name: 'routineDetailsView', params: {routineSlug: routine.slug}}">
              <v-btn class="hover-btn" color="success" large width="250" rounded >{{ routine.routineName }}</v-btn>
          </router-link>
            <v-btn class="delete-button hover-btn" color="error" elevation="3" fab rounded small><v-icon>delete_forever</v-icon></v-btn>
            <span class="text2">ELIMINAR RUTINA</span>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="routines-add-button">
      <div class="vertical-line"></div>
    </div>
    <div>
      <h2 class="details-title color-title margin-title">Detalle de rutina</h2>
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

  .v-btn:focus::before {
    opacity: 0 !important;
  }


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
    display: flex;
    justify-content: space-between;
  }

  .margin-title {
    margin-right: 150px;
  }

  .button-with-text {
    display: flex;
    color: gray;
    font-size: 15px;
    align-items: center;
    margin-left: 80px;
  }

  .text {
    margin-left: 10px;
  }

  .text2 {
    display: flex;
    align-items: center;
    color: gray;
    font-size: 12px;
    margin-left: 7px;
  }

  .vertical-line{
    width: 2px;
    background-color: black;
    height: 100%;
    float: left;
    min-height: 500px;
    background-color: gray;
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

  .delete-routine-div {
    display: flex;
  }

  .delete-button {
    margin-left: 15px;
  }

  .hover-btn:hover {
    opacity: 75%;
  }

  a {
    text-decoration: none;
  }

</style>