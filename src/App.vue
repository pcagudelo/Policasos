<script setup>
import { RouterLink, RouterView } from 'vue-router'

let listaCasos=[
  {"id":1,"fecha_creacion":"2023-11-01","resumen":"Solicitude de incripcion de matricula", "detalle":"De la manera mas atenta pido colaboracion habilitando la materia integracionj continua","solicitante": "Pablo Cesar Agudelo"},
  {"id":2,"fecha_creacion":"2023-11-02","resumen":"Revisar nota", "detalle":"Se pide revision de la pregunta numero 2 de la actividad 1 ya que no se visualiza correctamente","solicitante": "Pablo Cesar Agudelo"},
  {"id":3,"fecha_creacion":"2023-11-03","resumen":"Solicitud de grupo", "detalle":"cordial saludo, de la forma mas atenta pido se me asigne a un grupo de trabajo","solicitante": "Pablo Cesar Agudelo"}
  
  ];
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


    <h6>listado de casos</h6>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ticket</th>
          <th scope="col">fecha</th>
          <th scope="col">Resumen</th>
          <th>Solicitante</th>
          <th>Asignado A</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(caso, index) in listaCasos">

          <td>{{ index }}</td>
          <td>{{ caso.id }}</td>
          <td>{{ caso.fecha_creacion }}</td>
          <td>{{ caso.resumen }}</td>
          <td>{{ caso.solicitante }}</td>
        </tr>
      </tbody>
      </table>

</div>


</template>

<style scoped>

</style>
