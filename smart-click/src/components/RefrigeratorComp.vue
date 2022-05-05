<template>

    <div>
        <v-icon x-large>kitchen</v-icon>
        <p>{{device.deviceName}}</p>
        <v-row class="action-row">
            <div>
               <v-slider prepend-icon="device_thermostat"
                        @change="refriTemp=number"/>
            </div>
       </v-row>
       <v-row class="action-row" justify="center">

            <div>
               <v-slider prepend-icon="ac_unit"
               @change="refriTemp=number"/>
            </div>
       </v-row>
    </div>

</template>

<script>


export default {
    name: "RefrigeratorComp",
    props: {
      deviceEntity: {},
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>