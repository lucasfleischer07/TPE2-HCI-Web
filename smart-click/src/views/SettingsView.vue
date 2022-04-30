<template>
  <div>
<!--    <v-list  class="config-options">-->
<!--      <v-list-group-->
<!--              :value="true"-->
<!--            >-->
<!--          <v-icon>settings</v-icon>-->
<!--          <span>General</span>-->
<!--          <div>-->
<!--            <h5>Terminos y Condiciones</h5>-->
<!--            <h5>Modo oscuro</h5>-->
<!--            <h5>Config 3</h5>-->
<!--          </div>-->

<!--          <v-icon>security</v-icon>-->
<!--          <span>Ayuda</span>-->
<!--          <div>-->
<!--            <h5>Agregar Dispositivos</h5>-->
<!--            <h5>Agregar Casas y Cuartos</h5>-->
<!--            <h5>Crear una Rutina</h5>-->
<!--          </div>-->

<!--          <v-icon>notifications_active</v-icon>-->
<!--          <span>Notificaciones</span>-->
<!--          <div>-->
<!--            <h5>Activar </h5>-->
<!--            <h5>Config 2</h5>-->
<!--            <h5>Config 3</h5>-->
<!--          </div>-->
<!--        </v-list-group>-->
<!--    </v-list>-->

    <v-list>
      <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>General</v-list-item-title>
        </template>

        <v-list-item
            v-for="(title, i) in general"
            :key="i"
            link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle">

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Privacidad</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: "SettingsView",

    data () {
      return {
          general: [['Terminos y Condiciones',2],['Modo Oscuro',3],['Config 3',4]],
          security: [['Terminos y Condiciones',5],['Modo Oscuro',6],['Config 3',7]],
          notificaciones: [['Terminos y Condiciones',8],['Modo Oscuro',9],['Config 3',2]],
      }
    }
}


</script>

<style scoped>
    .config-options{
        text-align: left;
    }
</style>