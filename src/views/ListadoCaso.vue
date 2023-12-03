<script setup>

const casos=[
    {"id":1,"fecha_creacion":"2023-11-01","resumen":"Solicitude de incripcion de matricula", "detalle":"De la manera mas atenta pido colaboracion habilitando la materia integracionj continua","solicitante": "Pablo Cesar Agudelo","asignado": "Tecnico1"},
    {"id":2,"fecha_creacion":"2023-11-02","resumen":"Revisar nota", "detalle":"Se pide revision de la pregunta numero 2 de la actividad 1 ya que no se visualiza correctamente","solicitante": "Pablo Cesar Agudelo","asignado": "Tecnico1"},
    {"id":3,"fecha_creacion":"2023-11-03","resumen":"Solicitud de grupo", "detalle":"cordial saludo, de la forma mas atenta pido se me asigne a un grupo de trabajo","solicitante": "Pablo Cesar Agudelo","asignado": "Tecnico1"}
    
];



</script>
<template>
     <h4>listado de casos</h4>

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
        <tr v-for="(caso, index) in casos">

        <td>{{ index }}</td>
        <td>
            <router-link class="nav-link" :to="{name:'gestion', params:{ticket:index}}">
                <button type="button" class="btn btn-light">{{ caso.id }}</button>           
            </router-link>
        </td>
        <td>{{ caso.fecha_creacion }}</td>
        <td>{{ caso.resumen }}</td>
        <td>{{ caso.solicitante }}</td>
        <td>{{ caso.asignado }}</td>

        </tr>
    </tbody>
</table>
</template>