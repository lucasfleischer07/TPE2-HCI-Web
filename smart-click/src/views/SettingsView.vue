<template>
  <div>
<!--    class="mx-auto" -> meter este atributo y va a quedar centrado-->
    <v-card width="500" color="secondary">
      <v-list>
        <v-list-group prepend-icon="settings">
          <template v-slot:activator>
            <v-list-item-title>General</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>receipt_long</v-icon>
                  Terminos y Condiciones
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Insertar Terminos y condiciones aca</v-list-item>
          </v-list-group>

          <v-list-item>
            <v-switch v-model="darkMode" label="Modo Oscuro"></v-switch>
<!--            <v-list-item-icon><v-icon>dark_mode</v-icon></v-list-item-icon>-->
          </v-list-item>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>dark_mode</v-icon>
                  Config 3</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>
        </v-list-group>

        <!------------------------------------------------------------------------------------------------------------->

        <v-list-group prepend-icon="lock">
          <template v-slot:activator>
            <v-list-item-title>Privacidad</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>receipt_long</v-icon>
                  VER QUE METER ACA
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>VER QUE METER ACA</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>dark_mode</v-icon>
                  VER QUE METER ACA</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>dark_mode</v-icon>
                  VER QUE METER ACA</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>
        </v-list-group>

<!------------------------------------------------------------------------------------------------------------->

        <v-list-group prepend-icon="help">
          <template v-slot:activator>
            <v-list-item-title>Ayuda</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>home</v-icon>
                  Agregar casa
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>VER QUE METER ACA</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>bed</v-icon>
                  Agregar cuarto</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>devices</v-icon>
                  Agregar dispositivo</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>calendar_month</v-icon>
                  Crear una rutina</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> Ver que poner o lo sacamos</v-list-item>
          </v-list-group>
        </v-list-group>

        <!------------------------------------------------------------------------------------------------------------->


      </v-list>
    </v-card>
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
        darkMode: false
      }
    }
}


</script>

<style scoped>
</style>