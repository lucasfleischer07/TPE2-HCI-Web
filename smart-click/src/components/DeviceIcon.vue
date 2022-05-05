<template>
    <div>
        <v-row>
          <v-col cols="11"
                 >
              <v-icon x-large class="col-6">{{nameDevice}}</v-icon>

              <v-btn depressed icon class="" >
                <v-icon  color="error" >delete_forever</v-icon>
              </v-btn>
          </v-col>
        </v-row>
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

</style>