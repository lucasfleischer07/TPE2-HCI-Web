<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn" >
        <device-icon name-device="door_front"/>
      </v-row>
      <p class="text">{{deviceEntity.deviceName}}</p>
    </v-card>

    <v-card class="background-card">
      <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn depressed icon class="button-margin">
              <v-icon x-large>open_in_full</v-icon>
            </v-btn >
            <v-btn depressed icon>
              <v-icon x-large>close_fullscreen</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-row class="action-row  action_btn">
          <div class="div-margin">
            <v-btn depressed icon class="button-margin">
              <v-icon x-large>lock</v-icon>
            </v-btn >
            <v-btn depressed icon>
              <v-icon x-large>lock_open</v-icon>
            </v-btn>
          </div>
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

</style>