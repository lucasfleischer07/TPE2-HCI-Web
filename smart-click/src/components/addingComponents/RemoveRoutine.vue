<template>
  <div>
    <v-btn v-if="$canEdit" @click.stop="deleteModal" class="delete-button hover-btn" color="error" elevation="3" fab rounded small><v-icon>delete_forever</v-icon></v-btn>
    <v-dialog v-model="confirmRemoveRoutine" max-width="600px" height="600px">
      <v-card>
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ routine.name }}"</h2>
        </v-card-title>
        <input style="outline:none; cursor: none; color: transparent; width: 1px; height: 1px" ref="inputElem" @keypress="removeRoutine(routine)" value="">
        <v-card-text>
          <v-btn class="padding-right" color="error" @click="removeRoutine(routine)" >
            Eliminar
          </v-btn>
          <v-btn color="grey"  @click.stop="confirmRemoveRoutine=false">
            Cancelar
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";


  export default {
    name: "RemoveRoutine",

    props: {
      routine: {}
    },

    data(){
      return{
        confirmRemoveRoutine:false,

      }
    },

    computed: {
      ...mapState({
        $canEdit: "editingRoutine",
      }),
    },

    methods: {
      ...mapActions("Routine", {
        $deleteRoutine: "deleteRoutine"
      }),
      
      deleteModal() {
        try {
          this.confirmRemoveRoutine = true;
          // this.getRoutines();
          setTimeout(()=> this.$refs.inputElem.focus(), 300)
        } catch (e) {
          this.setResult(e)
        }
      },

      async   removeRoutine(routine){
        try{
          await this.$deleteRoutine(routine.id)
          this.snackbar=true
        }catch (e) {
          if(e.code===99){
            this.$router.push('NotFound/')
          }
        }
        this.confirmRemoveRoutine= false

      },

    },
  }


</script>

<style scoped>
.padding-right {
  margin-right: 25px;
}
</style>