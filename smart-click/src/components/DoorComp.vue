<template>

  <div>
    <v-icon x-large>door_front</v-icon>
    <p>{{device.deviceName}}</p>
    <v-row class="action-row  ">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>open_in_full</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>close_fullscreen</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="action-row  ">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>lock</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>lock_open</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="action-row  ">
      <v-btn depressed icon>
          <v-icon x-large>info</v-icon>
      </v-btn >
    </v-row>


  </div>
</template>

<script>


export default {
    name: "DoorComp",
    props: {
      deviceEntity: {},
    },
    data () {
        return {


        }
      },
}
</script>

<style scoped>
  .action-row{
    padding-top:   0px;
    justify-content: center;
  }
</style>