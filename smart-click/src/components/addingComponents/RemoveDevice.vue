<template>
  <div class="main-div">
    <v-btn depressed icon class="trash_class" @click.stop="deviceRemove = true"><v-icon color="error">delete_forever</v-icon></v-btn>
    <v-dialog v-model="deviceRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeDevice">
        <v-card-title>
          <h2>Esta seguro que desea eliminar {{deviceEntity.name}}</h2>
        </v-card-title>
        <v-card-text>
          <v-btn class="padding-btn" color="error" @click="removeDevice" >
            Eliminar
          </v-btn>
          <v-btn color="grey"  @click.stop="deviceRemove=false">
            Cancelar
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>


import {mapActions} from "vuex";
import {Device} from "@/Api/Device";

export default {
  name: "RemoveDevice",
  props: {
  deviceEntity:{}
  },
  data() {
    return {


      deviceRemove: false,
      confirmRemoveDevice:false,

      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },

  methods: {
    ...mapActions("Devices",{
      $removeDevice:"deleteDevice"
    }),

    async removeDevice(){
        let device=Object.assign(new Device(),this.deviceEntity)
        await this.$removeDevice(device.id)

        this.confirmRemoveDevice = false
        this.deviceRemove = false

        this.deviceDeleteSelected = {}
      }
    }


}
</script>

<style scoped>

.main-div {
  position: relative;
  left: 80%;
  bottom: 60%;
}

.padding-btn {
  margin-right: 25px;
}

</style>