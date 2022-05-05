<template>
  <div class="routines-view">
    <div class="list-routines">
      <h2>Mis rutinas</h2>
    </div>
    <div class="add-routines">
      <h2>Crear nueva rutina</h2>
    </div>
  </div>
</template>



<script>
  export default {
    name: "RoutinesView"
  }
</script>



<style scoped>
  .routines-view {
    display: flex;
    justify-content: space-between;
    text-align: center;
    min-height: 500px;

  }

  .list-routines {
    text-align: center;
   
  }
</style>