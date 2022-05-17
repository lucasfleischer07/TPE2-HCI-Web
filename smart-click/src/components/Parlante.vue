<template>
  <div class="action-row device-div" >
    <v-card class="background-card">
      <v-row class="action-row action_btn" >
        <device-icon name-device="speaker" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.name}}</p>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row action_btn">
          <div >
            <v-btn depressed icon @click="previousSongFunction"><v-icon  x-large>first_page</v-icon></v-btn >
<!--            TODO: VER DE METER EL BOTON DE PAUSA. HAGO CLICK EN PLAY SE PONE EL BOTON DE PAUSA Y ASI SUSECIVAMENTE-->
            <v-btn class="margin-separation-icons" depressed icon @click="playFunction"><v-icon x-large>play_circle</v-icon></v-btn>
            <v-btn depressed icon @click="nextSongFunction"><v-icon x-large>last_page</v-icon></v-btn>
          </div>
        </v-row>
        <v-row class="action-row action_btn slider-class" >
          <v-btn depressed icon v-model="sound" @click="sound=0"><v-icon x-large>volume_down_alt</v-icon></v-btn>
          <v-slider class="margin-slider"
                    :max="10"
                    :min="0"
                    style="width: 30%"
                    v-model="sound"
                    @click="setVolumeFunction"></v-slider>
<!--          TODO:  VER SI EL LLAMADO DE LA FUNCION VA ACA EN EL SLIDER, SINO NOSE DONDE VA-->
          <v-text-field dense
                        hide-details
                        single-line
                        v-model="sound"
                        style="width: 20%"
                        type="number"
                        class="margin-text">
          </v-text-field>
        </v-row>
        <v-row class="action-row">
          <div>
            <v-btn depressed icon><v-icon x-large @click="getPlaylistFunction">queue_music</v-icon></v-btn >
<!--            TODO: HACER UN V-DILOG QUE CUANDO TOQUE, ME DEJE ELEGIR EL GENERO QUE QUIERO PONER-->
            <v-btn class="margin-separation-icons2" v-model="genre" depressed icon @click="setGenreFunction"><v-icon x-large>radio</v-icon></v-btn>
          </div>
        </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parlante",

  components: {
    DeviceIcon
  },

  props: {
    deviceEntity: {},
  },


  data () {
    return {
      sound: 0,
      genre: '',

    }
  },

  methods: {

    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
    }),

    async playFunction() {
      let params = [this.deviceEntity.id, "play", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async pauseFunction() {
      let params = [this.deviceEntity.id, "pause", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async nextSongFunction() {
      let params = [this.deviceEntity.id, "nextSong", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async previousSongFunction() {
      let params = [this.deviceEntity.id, "previousSong", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async getPlaylistFunction() {
      let params = [this.deviceEntity.id, "getPlaylist", []]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setGenreFunction() {
      let params = [this.deviceEntity.id, "setGenre", [this.genre]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setVolumeFunction() {
      let params = [this.deviceEntity.id, "setVolume", [this.sound]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },




  }
}
</script>

<style scoped>

.device-div{
  width: 220px;
  justify-content: start;
  height: max-content;
}

.margin-slider {
  margin-left: 10px;
}

.margin-text {
  margin-right: 15px;
  margin-left: 10px;
}

.action-row{
  justify-content: center;
}

  .action_btn{
    padding: 5px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .slider-class {
    margin-top: 25px;
    margin-left: 5px;
  }

  .text {
    margin-bottom: 20px;
  }

  .margin-slider {
    margin-right: 7px;
    margin-left: 7px;
  }

  .margin-separation-icons {
    margin-left: 20px;
    margin-right: 20px;
  }

  .margin-separation-icons2 {
    margin-left: 80px;
    margin-bottom: 5px;
  }

  .margin-card {
    margin-bottom: 50px;
  }

</style>