<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
<div class="container">

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">            
          <li class="nav-item">
            <router-link class="nav-link" to="/">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registrar">Nuevo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/listado">Casos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Gestionar</a>
          </li>
        </ul>
      </div>
    </div>          
  </nav>
      <router-view/>
</div>


</template>

<style scoped>

</style>
