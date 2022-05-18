<template>
  <div>
    <div v-if="Object.entries($myHome).length ===  0" class="h1-title">
      <v-icon x-large>house</v-icon>
      <h1>Seleccione una casa</h1>
    </div>
  <div  v-else class="routines-view">
    <div>
      <div class="title-padding">
        <h2 class="color-title">Mis rutinas</h2>
      </div>
      <v-row v-for="routine in $routines" :key="routine.id">
        <v-col v-if="routine.meta.homeId===$myHome.id" class="routines-button">
          <div class="delete-routine-div">
            <router-link :to="{name: 'routineDetailsView', params: {routineSlug: routine.meta.slug}}">
              <v-btn class="hover-btn" color="success" large width="250" rounded @click="DeshabilitarBorrado">
                <span style="overflow: hidden; max-width:250px">{{ routine.name }}</span>
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="routines-add-button">
      <AddRoutineRound class="add-button" />
      <div class="vertical-line"></div>
    </div>
    <div>
      <h2 class="details-title color-title ">Detalle de rutina</h2>
      <router-view :key="$route.path"/>
    </div>
  </div><v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="#737373"
  >
    Rutina borrada correctamente

    <template v-slot:action="{ attrs }">
      <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>

  </div>
</template>



<script>
  import AddRoutineRound from "@/components/addingComponents/AddRoutineRound";
  import {mapActions, mapState,mapMutations} from "vuex";
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
      ...mapState({
        $canEdit: "editingRoutine",
        $apiDown: "apiDown"
      }),


    },

    mounted(){
      this.$setEditingTrue()
    },

    methods: {
      ...mapActions("Routine", {
        $getRoutine: "getAllRoutine",
        $deleteRoutine: "deleteRoutine"
      }),
      ...mapMutations({
        $setEditingFalse: "setEditingFalse",
        $setApiDown: "setApiDown"
      }),

      async getRoutines(){
        let response
        try {
           response = await this.$getRoutine()
        }catch(e){
          if(e.code===99){
            this.$router.push('NotFound/')
          }
        }
        return response
      },


      DeshabilitarBorrado(){
        this.$setEditingFalse()
      },


    },


    data() {
      return {
        snackbar:false,
        routines: this.getRoutines(),
        confirmRemoveRoutine: false,
        // house: store.house,
      }
    },
  }

</script>



<style scoped>

  /*.v-btn:focus::before {*/
  /*  opacity: 0 !important;*/
  /*}*/


  .color-title {
    color: gray;
    font-size: 30px;
  }

  .routines-view {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    min-height: 580px;
    padding-bottom: 20px;
    padding-top: 20px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .title-padding {
    padding-bottom: 25px;
  }

  .add-button{
    margin-right: 10px;
  }

  .vertical-line{
    width: 2px;
    background-color: black;
    height: 100%;
    float: left;
    min-height: 550px;
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
    color: grey;
    font-size: 30px;
    padding-bottom: 20px;
    justify-content: center;
  }

  .delete-routine-div {
    display: flex;
  }

  .delete-button {
    margin-left: 15px;
  }

  .hover-btn:hover {
    opacity: 75%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .h1-title {
    justify-content: center;
    color: gray;
    min-height: 580px;
    padding-bottom: 20px;
    padding-top: 40px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }



  a {
    text-decoration: none;
  }

</style>