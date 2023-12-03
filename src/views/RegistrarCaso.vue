<script setup>
import { ref } from 'vue';

const valorCategoria=ref("Categoria");

const categorias=[
    {id: 1,descripcion:"Recuperacion de contraseña"},
    {id: 2,descripcion:"Generacion de desprendible de pago"},
    {id: 3,descripcion:"Opciones de grado"},
    {id: 4,descripcion:"Problema con correo Electronico"},
    {id: 5,descripcion:"Ajuste de nota"},
    {id: 6,descripcion:"Transferencia Bancaria"},
    {id: 7,descripcion:"Inscripion de Asignatura"},
    {id: 8,descripcion:"Cursos MOCS"}
];

</script>

<template>
    <h4>Registar un nuevo caso</h4>
    <div class="mb-3">
    <label class="form-label">Resumen</label>
    <input type="email" class="form-control" >
    </div>

    <div class="mb-3">
        <label class="form-label">Seleccionar Categoria</label>
        <select class="form-select" v-model="valorCategoria">
            <option selected>Categoria</option>
            <option v-for="categoria in categorias" :value="categoria.id">
                {{ categoria.descripcion }}
            </option>
        </select>
    </div>

    <div class="mb-3">
    <label class="form-label">Descripcion</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <button type="button" class="btn btn-success">Guardar</button>

</template>