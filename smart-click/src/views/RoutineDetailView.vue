<template>
  <section>
    <div class="routine-details">
        <div class="routineName-and-switch">
          <div>
            <p>{{detail.routineName}}</p>
          </div>
          <div class="boton-centrado">
            <v-btn @click="executeRoutine" color="primary">Activar Rutina</v-btn>
          </div>
        </div>
    </div>

      <p style="padding-top: 25px">Dispositivos involucrados</p>
      <v-list two-line class="list-class">
        <template v-for="item in detail.actions">
          <v-list-item :key="item.device.id">
          <v-list-item-content >
            <v-list-item-title v-text="item.device.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.actionName"></v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
  </section>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  name: "RoutineDetailView",


  props: {
      slug:{
          type: String,
          required: true,
      },

      routineSlug: {
        type: String,
        require: true
      },
    },

     computed: {
       ...mapState("Routine", {
         $routines: "routines",
       }),
       detail() {
          return this.$routines.find(
              detail => detail.meta.slug === this.routineSlug
          )
       }
     },


  data(){
      return{modal2:false,
            menu2:false,
            diasSel:null,
            // copyStore:store
      }
  },

  methods:{
    ...mapActions("Routine", {
      $executeRoutine: "executeRoutine",
    }),
    async executeRoutine() {
      try {
         await this.$executeRoutine(this.detail.id)
      } catch (e) {
        console.log(e)
      }
    }


  }

}
</script>

<style scoped>
  .routine-details {
    color: gray;
  }

  .routineName-and-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
  }

  .list-class {
    background-color: transparent;
  }

  .remove-button {
    display: flex;
    padding-left: 100px;
  }

  .boton-centrado{
    justify-content: center;
  }


</style>