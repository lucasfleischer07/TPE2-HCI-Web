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
          <v-btn :disabled="prevPush" depressed icon @click="previousSongFunction"><v-icon  x-large>first_page</v-icon></v-btn >
          <v-btn v-if="deviceState.status!= 'stopped'" class="margin-separation-icons" :disabled="stopPush" depressed icon @click="stopFunction"><v-icon x-large>stop</v-icon></v-btn>
          <v-btn v-if="deviceState.status== 'stopped'" class="margin-separation-icons" :disabled="playPush" depressed icon @click="playFunction"><v-icon x-large>play_arrow</v-icon></v-btn>
          <v-btn v-if="deviceState.status== 'playing' " class="margin-separation-icons" :disabled="pausePush" depressed icon @click="pauseFunction"><v-icon x-large>pause</v-icon></v-btn>
          <v-btn v-if="deviceState.status== 'paused' " class="margin-separation-icons" :disabled="resumePush" depressed icon @click="resumeFunction"><v-icon x-large>play_arrow</v-icon></v-btn>
          <v-btn :disabled="nextPush" depressed icon @click="nextSongFunction"><v-icon x-large>last_page</v-icon></v-btn>
        </div>
        </v-row>
        <v-row class="action-row action_btn slider-class" >
<!--          <v-btn @click="(sound = 0) && (setVolumeFunction)" depressed icon v-model="sound" ><v-icon x-large>volume_down_alt</v-icon></v-btn>-->
          <v-slider :disabled="volumePush" class="margin-slider"
                    :max="10"
                    :min="0"
                    style="width: 30%"
                    v-model="sound"
                    @change="setVolumeFunction"
                    prepend-icon="volume_down_alt"

          ></v-slider>
<!--          TODO:  VER SI EL LLAMADO DE LA FUNCION VA ACA EN EL SLIDER, SINO NOSE DONDE VA-->
          <v-text-field dense
                        hide-details
                        single-line
                        v-model="sound"
                        style="width: 20%"
                        type="number"
                        class="margin-text"
                        readonly>
          </v-text-field>
        </v-row>
        <v-row class="action-row">
          <div>
            <v-btn depressed icon style="padding-bottom: 40px; padding-top: 30px"><v-icon x-large @click="list=true">queue_music</v-icon></v-btn >
              <v-dialog v-model="list"  max-width="600px" height="50px">
                <v-card>
                  <v-card-title>Lista de Reproducción</v-card-title>
                  <v-card-text v-for="song in playlist" :key="song.title">
                    <ul class="songs">
                      <li><span style="font-weight: bold">Nombre: </span>{{song.title}}, <span style="font-weight: bold">duración: </span>{{song.duration}}</li>
                    </ul>
                  </v-card-text>

                </v-card>
              </v-dialog>
          </div>
        </v-row>

      <v-row >
        <v-select
        outlined
        prepend-inner-icon="radio"
        v-model="genre"
        :items="localStore.devicesImplemented[0].actions[7].params[0].supportedValues"
        style="margin-left: 30px; margin-right: 30px"
        :disabled="genrePush"
        @change="setGenreFunction"
        >

        </v-select>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";
import localStore from "@/store/localStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parlante",
  async created() {
    this.deviceState=this.deviceEntity.state
    await this.getPlaylistFunction()
    this.sound=this.deviceState.volume
    this.genre=this.deviceState.genre

  },
  components: {
    DeviceIcon
  },

  props: {
    deviceEntity: {},
  },


  data () {
    return {
      sound: 3,
      genre: '',
      list:false,
      deviceState:{},
      playlist:{},
      localStore,
      playPush: false,
      stopPush: false,
      pausePush: false,
      prevPush: false,
      nextPush: false,
      playlistPush: false,
      genrePush: false,
      volumePush: false,
      resumePush: false
    }
  },


  methods: {

    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState",
      $getAllDevice:"getAllDevices"
    }),
    async updateContent(){

      this.deviceState=await this.$getDeviceState(this.deviceEntity.id)
      await this.getPlaylistFunction()
      this.updateVars()

    },

    updateVars(){
      this.sound=this.deviceState.volume
      this.genre=this.deviceState.genre
    },

    async playFunction() {
      this.playPush = true
      let params = [this.deviceEntity.id, "play", []]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.playPush = false
    },
    async stopFunction() {
      this.stopPush = true
      let params = [this.deviceEntity.id, "stop", []]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.stopPush = false
    },

    async resumeFunction() {
      this.resumePush = true
      let params = [this.deviceEntity.id, "resume", []]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.resumePush = false

    },

    async pauseFunction() {
      this.pausePush = true
      let params = [this.deviceEntity.id, "pause", []]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.pausePush = false
    },

    async nextSongFunction() {
      this.nextPush = true
      let params = [this.deviceEntity.id, "nextSong", []]
      try {
        await this.$execute(params)
        await this.updateContent()

      } catch (e) {
        this.setResult(e);
      }
      this.nextPush = false
    },

    async previousSongFunction() {
      this.prevPush = true
      let params = [this.deviceEntity.id, "previousSong", []]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      await setTimeout(() => {  console.log("World!"); }, 5000);
      console.log("Goodbye!");
      this.prevPush = false
    },

    async getPlaylistFunction() {
      this.playlistPush = true
      let params = [this.deviceEntity.id, "getPlaylist", []]
      try {
        this.playlist=await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
      this.playlistPush = false
    },

    async setGenreFunction() {
      this.genrePush = true
      let params = [this.deviceEntity.id, "setGenre", [this.genre]]
      try {
        await this.$execute(params)
        await this.updateContent()

      } catch (e) {
        this.setResult(e);
      }
      this.genrePush = false
    },

    async setVolumeFunction() {
      this.volumePush = true
      let params = [this.deviceEntity.id, "setVolume", [this.sound]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.volumePush = true
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

.songs {
  display: flex;
  flex-direction: column;
  color: black;
  align-items: flex-start;
  text-align: start;
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
    font-size: 25px;
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