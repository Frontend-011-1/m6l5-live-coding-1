<script setup>
import { ref } from 'vue'
import productos from '@/data/productos.json'

const props = defineProps(['id'])
const opiniones = ref([])

opiniones.value = productos.find(producto => producto.id == props.id).opiniones
</script>

<template>
  <div class="card my-4">
    <div class="card-header">
      <h3>Opiniones</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li v-for="opinion in opiniones" :key="opinion.id" class="list-group-item">
          {{ opinion.texto }} - <span class="text-success">Calificación: {{ opinion.calificacion }}/5</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>