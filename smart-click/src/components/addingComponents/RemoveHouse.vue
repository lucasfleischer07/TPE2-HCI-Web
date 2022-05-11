<template>
  <div>
    <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large @click.stop="houseRemove = true">
      <div class="icon-div">
        Eliminar Casa
        <v-icon large>delete_forever</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="houseRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeHouse(houseDeleteSelected)">
        <v-card-title>
          <h2>Seleccione casa a eliminar</h2>
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
                    v-model="houseDeleteSelected"
                    persistent-placeholder
                    placeholder="Seleccione casa a remover">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-btn color="primary" @click.stop="confirmRemoveHouse=true">
            Eliminar casa
          </v-btn>
          <v-dialog v-model="confirmRemoveHouse" max-width="600px" height="600px">
            <v-card @keyup.enter="removeHouse(houseDeleteSelected)">
              <v-card-title>
                <h2>Esta seguro que desea eliminar "{{ houseDeleteSelected }}"</h2>
              </v-card-title>

              <v-card-text>
                <v-btn color="primary" @click="removeHouse(houseDeleteSelected.nombreCasa)" >
                  Eliminar
                </v-btn>
                <v-btn color="error"  @click.stop="confirmRemoveHouse=false">
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
  name: "RemoveHouse",

  data() {
    return {
      houses: store.houses,


      houseRemove: false,
      confirmRemoveHouse:false,


      houseDeleteSelected: {},

      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
  methods: {

    removeHouse(houseToDelete) {
      if (houseToDelete == null)
        console.log("No selecciono casa")
      else {
        this.houses.splice(this.houses.indexOf(houseToDelete), 1)
        this.confirmRemoveHouse = false
        this.houseRemove = false
        this.houseDeleteSelected = {}
      }
    }


  }


}
</script>

<style scoped>

</style>