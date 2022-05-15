<template>
    <div>
      <v-btn color="info" @click="fav_mode = !fav_mode" depressed icon class="fav_class" >
        <v-icon v-if="fav_mode === false">star_half</v-icon>
        <v-icon v-else-if="fav_mode === true">star</v-icon>
      </v-btn>
      <v-icon x-large class="icon_class">{{nameDevice}}</v-icon>
      <v-btn depressed icon class="trash_class" >
        <v-icon color="error">delete_forever</v-icon>
      </v-btn>
    </div>
</template>

<script>
export default {
name: "DeviceIcon",
  props: {
    nameDevice: String,
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
  .trash_class{
    position: relative;
    left: 20%;
    bottom: 25%;
  }

  .fav_class {
    position: relative;
    right:20%;
    bottom: 25%;
  }


</style>