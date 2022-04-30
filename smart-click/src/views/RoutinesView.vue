<template>
  <div class="page-division">
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
  .page-division {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .list-routines {
    text-align: center;
  }
</style>