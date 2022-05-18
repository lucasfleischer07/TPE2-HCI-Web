<template>
  <section>
    <div class="routine-details">
      <div class="routine-name">
        <p>"{{detail.name}}"</p>
        <v-btn class="close-button" @click="closeDetail" icon color="primary" outlined><v-icon>close</v-icon></v-btn>
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
            <v-list-item-subtitle  v-if="item.params.length===0 || item.params[0]===null" class="device-info">{{getActionName(item.actionName)}}</v-list-item-subtitle>
            <v-list-item-subtitle v-else class="device-info">{{getActionName(item.actionName)}}: {{getParameterName(item.params[0])}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </section>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";
import actionsMap from "@/store/localStore"
import parameterMap from "@/store/localStore"

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
      myActionsMap: actionsMap.actionsMap,
      myParameterMap:parameterMap.parameterMap
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
    },
    getActionName(name){
      return this.myActionsMap.find(action =>
          action.name===name).nameSpanish
    },
    getParameterName(name){
      let nameFound = this.myParameterMap.find(parameter =>
          parameter.name===name)
      return nameFound? nameFound.nameSpanish : name
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
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding-bottom: 30px;
}

.close-button {
  position: absolute;
  right: 10%;
}

.device-name{
  font-size: 30px;
}

.device-info{
  font-size: 20px;
}

</style>