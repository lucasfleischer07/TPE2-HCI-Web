<template>
  <div class="main-div2">
    <div>
      <h1 class="padding-h1-title">Bienvenido/a a SmartClick</h1>
      <img src="@/assets/primera.png" alt="Logo_HomeView">
      <h2 class="padding-h2-title">Para comenzar, seleccione una casa existente en la parte superior derecha de la página</h2>
      <div class="text-and-button">
        <h2 class="padding-h2-title3">En caso contrario, agregue una haciendo click aquí <v-icon class="icon-arrow">arrow_right_alt</v-icon></h2>
        <AddHouse class="button-add"/>
      </div>
    </div>
  </div>
</template>

<script>
  import AddHouse from "@/components/addingComponents/AddHouse";
  import { mapMutations} from "vuex"


  export default {
    name: "HomeView",
    components: {
      AddHouse,
    },

    mounted(){
      this.$setEditingTrue()
    },

    data() {
      return {

      }
    },
    methods: {
      ...mapMutations({
        $setEditingTrue: "setEditingTrue"
      }),
    }

  }
</script>

<style scoped>
  .main-div2 {
    display: flex;
    justify-content: center;
    min-height: 580px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }


  .padding-h1-title {
    /*display: flex;*/
    justify-content: center;
    padding-top: 30px;
    font-size: 60px;
    color: gray;
  }

  .padding-h2-title {
    padding-top: 50px;
    /*padding-left: 80px;*/
    font-size: 33px;
    display: flex;
    justify-content: left;
    color: gray;

  }

  .padding-h2-title3 {
    padding-top: 20px;
    font-size: 33px;
    display: flex;
    justify-content: left;
    align-items: center;
    color: gray;
  }

  .icon-arrow {
    font-size: 80px;
  }

  .text-and-button {
    display: flex;
    padding-bottom: 50px;
  }

  .button-add {
    display: flex;
    padding-top: 30px;
  }

</style>