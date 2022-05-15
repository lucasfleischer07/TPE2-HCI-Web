<template>
  <section>
    <div class="routine-details">
        <div class="routineName-and-switch">
          <div>
            <p>{{detail.routineName}}</p>
          </div>
          <div>
            <v-switch class="margin-switcher"></v-switch>
          </div>
        </div>
    </div>

    <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="detail.routineTimeActivation"
          width="290px">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              style="width: 50%"
              v-model="detail.routineTimeActivation"
              label="Hora de activación"
              prepend-icon="schedule"
              readonly
              v-bind="attrs"
              v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker v-if="modal2" v-model="detail.routineTimeActivation" class="flex" full-width>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(detail.routineTimeActivation)">OK</v-btn>
        </v-time-picker>
      </v-dialog>

      <v-btn-toggle v-model="diasSel" multiple>
        <v-btn>L</v-btn>
        <v-btn>M</v-btn>
        <v-btn>M</v-btn>
        <v-btn>J</v-btn>
        <v-btn>V</v-btn>
        <v-btn>S</v-btn>
        <v-btn>D</v-btn>
      </v-btn-toggle>

      <p style="padding-top: 25px">Dispositivos involucrados</p>
      <v-list two-line class="list-class">
        <template v-for="item in detail.devicesAndActions">
          <v-list-item :key="item.device">
          <v-list-item-content >
            <v-list-item-title v-text="item.device"></v-list-item-title>
            <v-list-item-subtitle v-text="item.action"></v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
  </section>
</template>

<script>
// import store from '@/store/store.js'

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

    // computed: {
    //   detail() {
    //     // return store.house.routines.find(
    //     //     detail => detail.slug === this.routineSlug
    //     // )
    //   }
    // },


  data(){
      return{modal2:false,
            menu2:false,
            diasSel:null,
            // copyStore:store
      }
  },


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
  }

  .list-class {
    background-color: transparent;
  }

  .remove-button {
    display: flex;
    padding-left: 100px;
  }


</style>