<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
<div class="container text-center">
  <div class="nav-bar"> 
    <router-link to="/">Login</router-link>
    <router-link to="/registrar">Nuevo</router-link>
    <router-link to="/listado">Caso</router-link>
    <router-link to="/gestion">Gestionar</router-link>
  </div>
  <router-view/>
</div>


</template>

<style scoped>

</style>
