<template>
  <div class="help-view">
    <v-card class="mx-auto" width="500" color="secondary">
      <v-list>
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>home</v-icon>
                Agregar casa
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <p class="text-alignment">Para poder agregar una casa, en la barra superior, tocar el selector de casa.
              Debajo de las otras casas (si las hay) encontrará un botón con la opción "agregar casa". También puede agregar
              una casa desde la página principal presionando el botón de "agregar casa". </p>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>bed</v-icon>
                Agregar habitación</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <p class="text-alignment">Para poder agregar una habitación en una casa, primero se debe agregar o seleccionar una casa. Si necesita ayuda para realizar este paso, vea el ítem anterior de ayuda.
            Una vez que haya una casa seleccionada, ir al apartado dispositivos y tocar el botón "+" a la derecha de las habitaciones.
          </p></v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>devices</v-icon>
                Agregar dispositivo</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <p class="text-alignment">Para agregar un dispositivo, debe tener una casa y un cuarto agregados.
              Teniendo esto, ir al apartado dispositivos, elegir casa(si necesario) y una habitación. Luego presionar el
              botón "agregar dispositivo", elegir el tipo de dispositivo y luego presionar "confirmar".
          </p></v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>calendar_month</v-icon>
                Crear una rutina</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <p class="text-alignment">Para poder agregar una rutina, debe tener al menos un dispositivo agregado en su casa.
            Debe ir al apartado de rutinas, presionar "+". Luego debe seleccionar los dispositivos que desea vincular
            en la rutina, determinar la acción a realizar y su horario, agregar el dispositivos a la rutina y repetir para todos los dispositivos.
            Una vez que haya agregado todos los dispositivos necesarios, presionar "crear rutina" y habrá finalizado la creación.
          </p></v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HelpView"
}
</script>

<style scoped>
  .help-view {
    min-height: 530px;
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