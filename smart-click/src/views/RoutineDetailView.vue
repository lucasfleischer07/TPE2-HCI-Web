<template>
  <section>
    <v-btn @click="closeDetail" icon color="primary" outlined><v-icon>close</v-icon></v-btn>
    <div class="routine-details">
          <div class="routine-name">
            <p>"{{detail.name}}"</p>
          </div>
          <div class="boton-centrado">
            <v-btn @click="executeRoutine" color="primary" x-large rounded>Ejecutar Rutina</v-btn>
          </div>
    </div>

      <p class="dev-involved-text" style="padding-top: 25px" >Dispositivos involucrados y sus acciones:</p>
      <v-list two-line class="list-class">
        <template v-for="item in detail.actions">
          <v-list-item :key="item.device.id">
          <v-list-item-content>
            <v-list-item-title class="device-name" v-text="item.device.name"></v-list-item-title>
            <v-list-item-subtitle  class="device-info"  v-text="item.actionName"></v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
  </section>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

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
       ...mapState( {
         $canEdit: "editingRoutine",
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
    ...mapMutations({
      $setEditingTrue: "setEditingTrue",
    }),
    async executeRoutine() {
      try {
         await this.$executeRoutine(this.detail.id)
      } catch (e) {
        console.log(e)
      }
    },
    closeDetail(){
      this.$router.push('routines/')
      this.$setEditingTrue()
    }


  }

}
</script>

<style scoped>
  .routine-details {
    color: gray;
  }

  .list-class {
    background-color: transparent;
  }

  .dev-involved-text{
    color: grey;
    font-size: 25px;
    font-weight: bold;
  }

  .boton-centrado{
    margin-bottom: 20px;
    justify-content: center;
  }

  .routine-name{
    font-size: 30px;
    padding-bottom: 30px;
  }

  .device-name{
    font-size: 30px;
  }

  .device-info{
    font-size: 20px;
  }

</style>