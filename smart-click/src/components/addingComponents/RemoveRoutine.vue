<template>
  <div>
    <div class="div-button-delete-routine">
      <v-btn class="delete-button" color="error" elevation="3" fab rounded small @click.stop="removeHouse = true"><v-icon>delete</v-icon></v-btn>
      <span class="span-class">ELIMINAR RUTINA</span>
    </div>

    <v-dialog v-model="routineRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeRoutine(routineDeleteSelected)">
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
                    v-model="deviceRemoveHouseSelected"
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
                    :items="deviceRemoveHouseSelected.routines"
                    item-text="routineName"
                    label="Rutina seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="routineDeleteSelected"
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
            <v-card @keyup.enter="removeRoutine(routineDeleteSelected)">
              <v-card-title>
                <h2>Esta seguro que desea eliminar "{{ routineDeleteSelected.routineName }}"</h2>
              </v-card-title>

              <v-card-text>
                <v-btn color="error" @click="removeRoutine(routineDeleteSelected)" >
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
  name: "RemoveRoutine",

  data() {
    return {
      houses: store.houses,
      routineRemove: false,
      confirmRemoveRoutine:false,

      deviceRemoveHouseSelected: {},

      routineDeleteSelected: {},
      deviceName: "",
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
  methods: {
    removeRoutine(routine) {
      if (routine == null)
        console.log("No selecciono Dispositivo")
      else {
        //AGREGAR DISPOSITIVOVO
        this.confirmRemoveRoutine = false
        this.routineRemove = false
        this.deviceAddHouseSelected= {}
        this.deviceAddRoomSelected= {}
        this.routineDeleteSelected = {}
      }

    }
  }

}
</script>

<style scoped>

  .div-button-delete-routine {
    display: flex;
    width: auto;
    justify-content: end;
    /*margin-left: 200px;*/
    align-items: center;
  }

  .span-class {
    display: flex;
    color: gray;
    font-size: 13px;
    padding-left: 10px;
  }
</style>