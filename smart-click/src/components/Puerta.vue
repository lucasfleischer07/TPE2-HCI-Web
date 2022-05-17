<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn" >
        <device-icon name-device="door_front" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.name}}</p>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn depressed icon class="button-margin" @click="openDoorFunction">
              <v-icon x-large>open_in_full</v-icon>
            </v-btn >
            <v-btn depressed icon @click="closeDoorFunction">
              <v-icon x-large>close_fullscreen</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn depressed icon class="button-margin" @click="lockDoorFunction">
              <v-icon x-large>lock</v-icon>
            </v-btn >
            <v-btn depressed icon @click="unlockDoorFunction">
              <v-icon x-large>lock_open</v-icon>
            </v-btn>
          </div>
        </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Puerta",

  props: {
    deviceEntity: {},

  },

  components: {
      DeviceIcon
  },

  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
    }),

    async openDoorFunction() {
      let params = [this.deviceEntity.id, "open", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async closeDoorFunction() {
      let params = [this.deviceEntity.id, "open", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async lockDoorFunction() {
      let params = [this.deviceEntity.id, "lock", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async unlockDoorFunction() {
      let params = [this.deviceEntity.id, "unlock", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },



  },

  data () {
      return {
      }
    },
}
</script>

<style scoped>
  .device-div{
    width: 150px;
    justify-content: start;
    height: max-content;
  }

  .text {
    margin-bottom: 20px;
  }

  .button-margin {
    margin-right: 35px;
  }

  .div-margin {
    margin-bottom: 25px;
  }

  .action-row{
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .margin-card {
    margin-bottom: 50px;
  }


</style>