<template>
  <div>
    <div class="delete-div">
      <v-btn class="delete-button" color="error" elevation="3" fab rounded @click.stop="houseRemove = true"><v-icon>delete_forever</v-icon></v-btn>
      <span class="delete-text">ELIMINAR CASA</span>
    </div>
    <v-dialog v-model="houseRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeHouse(houseDeleteSelected)">
        <v-card-title>
          <h2>Seleccione la casa a eliminar</h2>
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
          <v-btn color="error" @click.stop="confirmRemoveHouse=true">
            Eliminar casa
          </v-btn>
          <v-dialog v-model="confirmRemoveHouse" max-width="600px" height="600px">
            <v-card @keyup.enter="removeHouse(houseDeleteSelected)">
              <v-card-title>
                <h2>Esta seguro que desea eliminar "{{ houseDeleteSelected }}"</h2>
              </v-card-title>
              <v-card-text>
                <v-btn class="padding-btn" color="error" @click="removeHouse(houseDeleteSelected)" >
                  Eliminar
                </v-btn>
                <v-btn color="grey"  @click.stop="confirmRemoveHouse=false">
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
import { mapState, mapActions } from "vuex";

export default {
  name: "RemoveHouse",

  data() {
    return {
      houseRemove: false,
      confirmRemoveHouse:false,
      houseDeleteSelected: {},
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },


  computed: {
    ...mapState("House", {
      house: (state) => state.house,
    }),

  },


  methods: {
    ...mapActions("House", {
      $removeHouse: "deleteHome",}),

    async removeHouse(houseToDelete) {
      try {
        await this.$removeHouse(houseToDelete.id);
        this.house = null;

      } catch (e) {
        this.setResult(e);
      }

      this.confirmRemoveHouse = false
      this.houseRemove = false
      this.houseDeleteSelected = {}
    }

  }


}
</script>

<style scoped>
  .delete-div {
    display: flex;
    justify-content: flex-end;
    color: gray;
    align-items: center;
  }

  .delete-button {
    margin-left: 100px;
    margin-right: 5px;
  }

  .delete-text {
    display: inline;
    padding-left: 10px;
    color: grey;
  }

  .padding-btn {
    margin-right: 25px;
  }

</style>