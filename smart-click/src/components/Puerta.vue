<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn" >
        <edit-device class="edit-button" :deviceEntity="deviceEntity" ></edit-device>
        <device-icon name-device="door_front" :deviceEntity="deviceEntity"/>
      </v-row>
      <v-row style="display: contents">
        <p class="text">{{deviceEntity.name}}</p>
      </v-row>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn v-if="open=='closed'" depressed icon :disabled="lock=='locked' || openPush" @click="openDoorFunction">
              <v-icon x-large>open_in_full</v-icon>
            </v-btn >
            <v-btn v-else depressed icon :disabled="closePush" @click="closeDoorFunction">
              <v-icon x-large>close_fullscreen</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn v-if="lock=='unlocked'" depressed icon :disabled="open=='opened' || lockPush" @click="lockDoorFunction">
              <v-icon x-large>lock</v-icon>
            </v-btn >
            <v-btn v-else depressed icon :disabled="unlockPush" @click="unlockDoorFunction" >
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
import EditDevice from "@/components/addingComponents/editDevice";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Puerta",

  props: {
    deviceEntity: {},

  },

  components: {
    EditDevice,
      DeviceIcon
  },
  created() {
    this.open=this.deviceEntity.state.status
    this.lock=this.deviceEntity.state.lock
    this.deviceState=this.deviceEntity.state
  },
  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState",
      $getAllDevice:"getAllDevices"
    }),

    async openDoorFunction() {
      this.openPush = true
      let params = [this.deviceEntity.id, "open", []]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        console.log(e);
      }
      this.openPush = false
    },

    async closeDoorFunction() {
      this.closePush = true
      let params = [this.deviceEntity.id, "close", []]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        console.log(e);
      }
      this.closePush = false
    },

    async lockDoorFunction() {
      this.lockPush = true
      let params = [this.deviceEntity.id, "lock", []]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        console.log(e);
      }
      this.lockPush = false
    },

    async unlockDoorFunction() {
      this.unlockPush = true
      let params = [this.deviceEntity.id, "unlock", []]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        console.log(e);
      }
      this.unlockPush = false
    },

    async updateContent(){

      this.deviceState=await this.$getDeviceState(this.deviceEntity.id)
      this.updateVars()

    },

    updateVars(){
      this.open=this.deviceState.status
      this.lock=this.deviceState.lock
    },
  },

  data () {
      return {
        deviceState:[],
        open:null,
        lock:null,
        openPush: false,
        closePush: false,
        lockPush: false,
        unlockPush: false,
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
    font-size: 25px;

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