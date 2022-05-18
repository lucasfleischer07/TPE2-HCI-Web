<template>
  <div class="settings-view">
    <v-card class="mx-auto" width="600">
      <v-list>
        <v-list-group :value="true" prepend-icon="settings">
            <template v-slot:activator>
              <v-list-item-title>General</v-list-item-title>
            </template>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>receipt_long</v-icon>
                  Términos y Condiciones
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> SmartClick no se responsabiliza de ninguna pérdida ni robo de información. El usuario es totalmente responsable de su propia seguridad. SmartClick no se hará responsable por la ruptura de ningún dispositivo vinculado.</v-list-item>
          </v-list-group>

        </v-list-group>

        <!------------------------------------------------------------------------------------------------------------->

        <v-list-group prepend-icon="lock">
          <template v-slot:activator>
            <v-list-item-title>Privacidad</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content >
                <v-list-item-title>
                  <v-icon>privacy_tip</v-icon>
                  Datos Personales
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment">SmartClick asegura que sus datos personales no seran compartidos intencionalmente con ningún otro usuario. SmartClick se reserva el derecho de utilizar los datos personales a su favor. </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>policy</v-icon>
                  Consideraciones</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment">SmartClick recomienda no compartir sus datos personales para evitar conflictos de privacidad. </v-list-item>
          </v-list-group>

        </v-list-group>

      </v-list>
    </v-card>
  </div>
</template>

<script>

  import {mapMutations} from "vuex";

  export default {
    name: "SettingsView",



    mounted(){
      this.$setEditingTrue()
    },

    methods:{
    ...mapMutations({
        $setEditingTrue: "setEditingTrue"
      })
    }
  }

</script>

<style scoped>

  .settings-view {
    min-height: 580px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .text-alignment{
    text-align: left;
    padding-left: 0;
  }

</style>