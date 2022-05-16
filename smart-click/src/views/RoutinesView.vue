<template>
  <div class="routines-view">
    <div>
      <div class="title-padding">
        <h2 class="color-title">Mis rutinas</h2>
      </div>
      <v-row v-for="routine in $routines" :key="routine.id">
        <v-col class="routines-button">
          <div class="delete-routine-div">
          <router-link :to="{name: 'routineDetailsView', params: {routineSlug: routine.meta.slug}}">
              <v-btn class="hover-btn" color="success" large width="250" rounded >{{ routine.name }}</v-btn>
          </router-link>
            <v-btn @click="confirmRemoveRoutine = true" class="delete-button hover-btn" color="error" elevation="3" fab rounded small><v-icon>delete_forever</v-icon></v-btn>
            <v-dialog v-model="confirmRemoveRoutine" max-width="600px" height="600px">
              <v-card @keyup.enter="removeRoutine(routine)">
                <v-card-title>
                  <h2>Esta seguro que desea eliminar "{{ routine.name }}"</h2>
                </v-card-title>

                <v-card-text>
                  <v-btn color="error" @click="removeRoutine(routine)" >
                    Eliminar
                  </v-btn>
                  <v-btn color="primary"  @click.stop="confirmRemoveRoutine=false">
                    Cancelar
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="routines-add-button">
      <AddRoutineRound class="add-button" />
      <div class="vertical-line"></div>
    </div>
    <div>
      <h2 class="details-title color-title margin-title">Detalle de rutina</h2>
      <router-view :key="$route.path"/>
    </div>
  </div>
</template>



<script>
  import AddRoutineRound from "@/components/addingComponents/AddRoutineRound";
  import {mapActions, mapState} from "vuex";
  // import RemoveRoutine from "@/components/addingComponents/RemoveRoutine";

  export default {
    name: "RoutinesView",
    components: {
      AddRoutineRound,
      // RemoveRoutine
    },
    computed: {
      ...mapState("House", {
        $myHome: "houseSelected"
      }),
      ...mapState("Routine", {
        $routines: "routines",
      }),

    },

    methods: {
      ...mapActions("Routine", {
        $getRoutine: "getAllRoutine",
        $deleteRoutine: "deleteRoutine"
      }),

      async getRoutines(){
        return await this.$getRoutine()
      },
      async removeRoutine(routine){
        try{
          await this.$deleteRoutine(routine.id)
        }catch (e) {
          this.setResult(e)
        }
        this.confirmRemoveRoutine= false

      }
    },


    data() {
      return {
        routines: this.getRoutines(),
        confirmRemoveRoutine: false

        // house: store.house,
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
  }

  .margin-title {
    margin-right: 150px;
  }

  .add-button{
    margin-right: 10px;
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