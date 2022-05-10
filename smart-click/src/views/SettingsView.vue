<template>
  <div class="settings-view">
<!--    class="mx-auto" -> meter este atributo y va a quedar centrado-->
    <v-card class="mx-auto" width="500">
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
                  Términos y Condiciones
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item> SmartClick no se responsabiliza de ninguna perdida ni robo de informacion. El usuario es totalmente responsable de su propia seguridad. SmartClick no se hara responsable por la ruptura de algun dispositivo vinculado.</v-list-item>
          </v-list-group>

          <v-list-item class="switch-centre">
            <v-switch label="Modo Oscuro" @change="$vuetify.theme.dark = !$vuetify.theme.dark"  ></v-switch>
<!--            <v-list-item-icon><v-icon>dark_mode</v-icon></v-list-item-icon>-->
          </v-list-item>


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
                  <!--              Ver si quieren sacar esto o no (el icono)      -->
                  <v-icon>privacy_tip</v-icon>
                  Datos Personales
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>SmartClick asegura que sus datos personales no seran compartidos intencionalmente con ningun otro usuario. SmartClick se reserva el derecho de utilizar los datos personales a su favor. </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>policy</v-icon>
                  Consideraciones</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>SmartClick recomienda no compartir sus datos personales para evitar conflictos de privacidad. </v-list-item>
          </v-list-group>

        </v-list-group>

<!------------------------------------------------------------------------------------------------------------->

<!--        <v-list-group prepend-icon="help">-->
<!--          <template v-slot:activator>-->
<!--            <v-list-item-title><v-icon>help</v-icon><v-btn>Ayuda</v-btn></v-list-item-title>-->
<!--          </template>-->

<!--          <v-list-group no-action sub-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  &lt;!&ndash;              Ver si quieren sacar esto o no (el icono)      &ndash;&gt;-->
<!--                  <v-icon>home</v-icon>-->
<!--                  Agregar casa-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item>-->
<!--              <p>Para poder agregar una casa, en el apartado de dispositivos, tocar el selector de casa.-->
<!--              Debajo de todo encontrara un botón con la opción "agregar casa"</p>-->
<!--            </v-list-item>-->
<!--          </v-list-group>-->

<!--          <v-list-group no-action sub-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  &lt;!&ndash;              Ver si quieren sacar esto o no (el icono)      &ndash;&gt;-->
<!--                  <v-icon>bed</v-icon>-->
<!--                  Agregar cuarto</v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item><p>Para poder agregar un cuarto a una casa, primero se debe agregar una casa. Si necesita ayuda para realizar este paso,ver el item anterior de ayuda.-->
<!--              Una vez haya una casa, ir al apartado dispositivos y tocar el botón "Agregar Cuarto"-->
<!--            </p></v-list-item>-->
<!--          </v-list-group>-->

<!--          <v-list-group no-action sub-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  &lt;!&ndash;              Ver si quieren sacar esto o no (el icono)      &ndash;&gt;-->
<!--                  <v-icon>devices</v-icon>-->
<!--                  Agregar dispositivo</v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item><p>Para agregar un dispositivo, debe tener una casa y un cuarto agregados.-->
<!--              Teniendo esto, ir al apartado dispositivos, elegir casa(si necesario) y cuarto. Luego presionar el-->
<!--              botón "agregar dispositivo", elegir el tipo de dispositivo y luego presionar "confirmar".-->
<!--            </p></v-list-item>-->
<!--          </v-list-group>-->

<!--          <v-list-group no-action sub-group>-->
<!--            <template v-slot:activator>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  &lt;!&ndash;              Ver si quieren sacar esto o no (el icono)      &ndash;&gt;-->
<!--                  <v-icon>calendar_month</v-icon>-->
<!--                  Crear una rutina</v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </template>-->
<!--            <v-list-item><p>Para poder agregar una rutina, debe tener al menos un dispositivo agregado.-->
<!--              Debe ir al apartado de rutinas, presionar "crear rutinas", seleccionar los dispositivos que vincular-->
<!--              en la rutina, determinar la acción a realizar y su horario, agregar el dispositivos a la rutina y repetir para todos los dispositivos-->
<!--              Una vez que se haya agregado todos los dispositivos necesarios, presionar "crear rutina" y habrá finalizado la creación.-->
<!--            </p></v-list-item>-->
<!--          </v-list-group>-->
<!--        </v-list-group>-->

        <!------------------------------------------------------------------------------------------------------------->

      </v-list>
    </v-card>
  </div>
</template>

<script>

  export default {
    name: "SettingsView",

  }


</script>

<style scoped>

  .settings-view {
    min-height: 530px;
  }

  .switch-centre{
    display: flex;
    justify-content: center;
  }


</style>