<template>
  <div class="help-view">
    <v-card class="mx-auto" width="600">
      <v-list>
        <v-list-group prepend-icon="house">
          <template v-slot:activator>
            <v-list-item-title>Casa</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>add</v-icon>
                  Agregar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder agregar una casa, en la barra superior, presionar el selector de casa. Debajo de las otras casas (si las hay) encontrará un botón con la opción "agregar casa". También puede agregar una casa desde la página principal presionando el botón de "agregar casa".
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>delete_forever</v-icon>
                  Eliminar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder eliminar una casa, en la barra superior, presionar el selector de casa. Seleccione la casa que desea eliminar. Luego aprete el botón de dispositivos en la barra de navegación. En dicha vista verá el nombre de su casa con un tacho de basura rojo a la derecha. Apretelo y la casa se eliminará. </v-list-item>
          </v-list-group>

        </v-list-group>

        <!------------------------------------------------------------------------------------------------------------->

        <v-list-group prepend-icon="bed">
          <template v-slot:activator>
            <v-list-item-title>Habitación</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content >
                <v-list-item-title>
                  <v-icon>add</v-icon>
                  Agregar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment">Para poder agregar una habitación en una casa, primero se debe agregar o seleccionar una casa. Si necesita ayuda para realizar este paso, vea el ítem anterior de ayuda. Una vez que haya una casa seleccionada, ir al apartado dispositivos y tocar el botón "+" a la derecha de las habitaciones. Apretelo y la habitación se eliminará.</v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>delete_forever</v-icon>
                  Eliminar</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder eliminar una habitación de una casa, primero situese en dicha casa. Seleccione el boton de dispositivos en la barra de navegación. Dentro encontrará su habitacion y verá un tacho de basura rojo a la derecha del nombre de la habitación. Apretelo y la habitación se eliminará. </v-list-item>
          </v-list-group>
        </v-list-group>

        <!--         ---------------------------------------------------------------------------------- -->

        <v-list-group prepend-icon="devices">
          <template v-slot:activator>
            <v-list-item-title>Dispositivos</v-list-item-title>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>add</v-icon>
                  Agregar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para agregar un dispositivo, debe tener una casa y un habitación agregados. Teniendo esto, ir al apartado dispositivos, elegir casa(si necesario) y una habitación. Luego presionar el botón "agregar dispositivo", elegir el tipo de dispositivo y luego presionar "confirmar".
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>delete_forever</v-icon>
                  Eliminar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder eliminar un dispositivo, debe tener una casa y un cuarto seleccionados. Ingrese en la habitación donde se encuentra su dispositivo. En dicho dispositivo encontrará un tacho de basura rojo. Apretelo y el dispositivo se eliminará.</v-list-item>
          </v-list-group>
        </v-list-group>

        <!--         ---------------------------------------------------------------------------------- -->

        <v-list-group prepend-icon="calendar_month">
          <template v-slot:activator>
            <v-list-item-title>Rutinas</v-list-item-title>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>add</v-icon>
                  Crear
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder agregar una rutina, debe tener al menos un dispositivo agregado en su habitación. Debe ir al apartado de rutinas, presionar "+". Luego debe seleccionar los dispositivos que desea vincular en la rutina, determinar la acción a realizar y su horario, agregar el dispositivos a la rutina y repetir para todos los dispositivos. Una vez que haya agregado todos los dispositivos necesarios, presionar "crear rutina" y habrá finalizado la creación.
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon>delete_forever</v-icon>
                  Eliminar
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="text-alignment"> Para poder eliminar una rutina, debe tener una casa seleccionada. Debe ir al apartado de rutinas. A la derecha del nombre de su rutina encontrará un tacho de basura rojo. Apretelo y la rutina se eliminará.
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <!--         ---------------------------------------------------------------------------------- -->

      </v-list>
    </v-card>
  </div>



</template>

<script>
import { mapMutations} from "vuex";

export default {
  name: "HelpView",

  mounted(){
    this.$setEditingTrue()
  },
  methods: {
    ...mapMutations({
      $setEditingTrue: "setEditingTrue"
    }),
  }


}
</script>

<style scoped>
  .help-view {
    min-height: 580px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .text-alignment{
    text-align: left;
    padding-left: 0;
  }

</style>