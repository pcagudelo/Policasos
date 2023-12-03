<script setup>

  let user;
  let password;
</script>

<template>
  <h1>Policasos</h1>

  <div class="mb-3">
    <label class="form-label">Usuario</label>
    <input type="text" class="form-control" :value="user">
  </div>

  <div class="mb-3">
    <label class="form-label">Contraseña</label>
    <input type="password" class="form-control" :password="password">
  </div>

  <button type="button" class="btn btn-success">Ingresar</button>
</template>
