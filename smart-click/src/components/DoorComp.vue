<template>

  <div >
    <v-card depressed class="action-row device-div">
      <v-row class="action-row action_btn" >
        <device-icon name-device="door_front"/>
      </v-row>
      <p>{{deviceEntity.deviceName}}</p>
      <v-row class="action-row  action_btn">
        <div >
          <v-btn depressed icon >
            <v-icon x-large>open_in_full</v-icon>
          </v-btn >
          <v-btn depressed icon>
            <v-icon x-large>close_fullscreen</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-row class="action-row  action_btn">
        <div >
          <v-btn depressed icon>
            <v-icon x-large>lock</v-icon>
          </v-btn >
          <v-btn depressed icon>
            <v-icon x-large>lock_open</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-row class="action-row  action_btn">
        <v-btn depressed icon>
            <v-icon x-large>info</v-icon>
        </v-btn >
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";


export default {
    name: "DoorComp",

    props: {
      deviceEntity: {},
    },

    components: {
        DeviceIcon
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

  .action-row{
    padding-top:   0px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }
</style>