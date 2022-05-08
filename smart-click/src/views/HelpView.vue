<template>
  <div class="help-view">
    <v-card class="mx-auto" width="500" color="secondary">
      <v-list>
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
          <v-list-item><p>Para poder agregar un cuarto a una casa, primero se debe agregar una casa. Si necesita ayuda para realizar este paso,ver el item anterior de ayuda.
            Una vez haya una casa, ir al apartado dispositivos y tocar el botón "Agregar Cuarto"
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
          <v-list-item><p>Para agregar un dispositivo, debe tener una casa y un cuarto agregados.
            Teniendo esto, ir al apartado dispositivos, elegir casa(si necesario) y cuarto. Luego presionar el
            botón "agregar dispositivo", elegir el tipo de dispositivo y luego presionar "confirmar".
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
            en la rutina, determinar la acción a realizar y su horario, agregar el dispositivos a la rutina y repetir para todos los dispositivos
            Una vez que se haya agregado todos los dispositivos necesarios, presionar "crear rutina" y habrá finalizado la creación.
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
  }
</style>