<template>
    <div>
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
  }
}
</script>

<style scoped>
  .icon_class{
    position: relative;
    left: 30%;
  }
  .trash_class{
    position: relative;
    left: 60%;
    bottom: 25%;
  }


</style>