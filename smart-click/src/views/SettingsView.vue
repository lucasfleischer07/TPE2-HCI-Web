<template>
  <div class="settings-view">
<!--    class="mx-auto" -> meter este atributo y va a quedar centrado-->
    <v-card class="mx-auto" width="500" color="secondary">
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

          <v-list-item class="switch-centre">
            <v-switch v-model="darkMode" label="Modo Oscuro" @change="$vuetify.theme.dark = !$vuetify.theme.dark"  ></v-switch>
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
              <v-list-item-content >
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
            <template v-slot:activator >
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
            <v-list-item>
              <p>Para poder agregar una casa, en el apartado de dispositivos, tocar el selector de casa.
              Debajo de todo encontrara un botón con la opción "agregar casa"</p>
            </v-list-item>
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
            <v-list-item><p>Para poder egregar un cuarto a una casa, primero se debe agrear una casa. Si necesita ayuda para realizar este paso,ver el item anterior de ayuda
                            .Una vez haya una casa, ir al apartado dispositivos y tocar el botón "Agregar Cuarto"
            </p></v-list-item>
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
            <v-list-item><p>Para agregar un dispositivo, debe tener una casa y un cuato agregados.
              Teniendo esto, ir al apartado dispositivos, elegir casa(si necesario) y cuarto. Luego presionar el
              boton "agregar dispositivo", elegir el tipo de dispositivo y luego persionar "confirmar".
            </p></v-list-item>
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
            <v-list-item><p>Para poder agregar una rutina, debe tener al menos un dispositivo agregado.
              Debe ir al apartado de rutinas, presionar "crear rutinas", seleccionar los dispositivos que vincular
              en la rutina, determinar la accion a realizar y su horario, agregar el dispositivos a la rutina y repetir para todos los dispoistivos
              Una vez haya agreado todos los dispositivos necesarios, presionar "crear rutina" y habra finalizado la creacion.
            </p></v-list-item>
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

      }
    }
}


</script>

<style scoped>

  .settings-view {
    min-height: 500px;
  }

  .switch-centre{
    display: flex;
    justify-content: center;
  }


</style>