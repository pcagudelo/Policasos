<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container text-center">
  <h1>Policasos</h1>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Usuario</label>
    <input type="text" class="form-control" id="exampleFormControlInput1">
  </div>

  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleFormControlInput1">
  </div>


    <button type="button" class="btn btn-success">Ingresar</button>

    
</div>


</template>

<style scoped>

</style>
