<template>
    <div>
        <v-icon x-large>{{device.iconMain}}</v-icon>


    </div>


</template>

<script>
import store from "@/store.store.js"

export default {
    name: "SpeakerComp",
    
    data () {
        return{
            id: 0,
            device : store.devices[this.id],         
         }
    },
}
</script>

<style scoped>

</style>