<template>
  <div>
    <v-icon x-large class="icon_class">{{nameDevice}}</v-icon>
    <RemoveDevice :deviceEntity="deviceEntity"/>
  </div>
</template>

<script>
import RemoveDevice from "@/components/addingComponents/RemoveDevice";
export default {
  name: "DeviceIcon",
  props: {
    nameDevice: String,

    deviceEntity:{}
  },

  components: {
    RemoveDevice
  },

  data() {
    return {
      fav_mode: false,
    }
  }
}
</script>

<style scoped>
.icon_class{
  position: relative;
}


</style>