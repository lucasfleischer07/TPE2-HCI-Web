<template>
  <div>
    <div class="add-button-padding">
      <v-btn color="primary" elevation="3" fab rounded @click.stop="routineAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
    <v-dialog v-model="routineAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="addRoutine(routineCreated)">
        <v-card-title>
          <h2>Elija rutina a eliminar</h2>

        </v-card-title>
        <v-card-text>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="houses"
                    label="Casa seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    v-model="deviceAddHouseSelected"
                    persistent-placeholder
                    placeholder="Seleccione una casa">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="deviceAddHouseSelected.routines"
                    item-text="routineName"
                    label="Rutina seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    v-model="deviceDeleteSelected"
                    persistent-placeholder
                    placeholder="Seleccione una rutina">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-btn color="primary" @click.stop="confirmRemoveRoutine = true">
            Eliminar rutina
          </v-btn>
          <v-dialog v-model="confirmRemoveRoutine" max-width="600px" height="600px">
            <v-card @keyup.enter="removeRoutine(routineDeleteSeleceted)">
              <v-card-title>
                <h2>Esta seguro que desea eliminar "{{ routineDeleteSeleceted }}"</h2>
              </v-card-title>

              <v-card-text>
                <v-btn color="error" @click="removeRoutine(routineDeleteSeleceted)" >
                  Eliminar
                </v-btn>
                <v-btn color="primary"  @click.stop="confirmRemoveRoutine=false">
                  Cancelar
                </v-btn>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-dialog>




  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "AddRoutine",


  data(){
    return {
      myStore: store,

      routineAdd: false,

      houseSelected:{},
      deviceSelected: {},
      actionSelected: {},

      routineCreated: []
    }
  },

  methods: {
    addRoutine(routine){
      if(routine == null)
        console.log("No completo la rutina completa" )
      else
        this.routineAdd = false,
        this.houseSelected = {},
        this.deviceSelected= {},
        this.actionSelected= {},

        this.routineCreated= []

    }
  }
}
</script>

<style scoped>

</style>