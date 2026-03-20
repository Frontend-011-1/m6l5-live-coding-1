<script setup>
import productos from '@/data/productos.json'
</script>

<template>
  <div>
    <h1 class="text-center">Productos</h1>
    <div class="row justify-content-center">
      <div class="col-md-8 ">
        <ul class="list-group">
          <RouterLink class="list-group-item d-flex justify-content-between align-items-center"
            v-for="producto in productos" :key="producto.id" :to="{ name: 'producto', params: { id: producto.id } }">
            {{ producto.nombre }}
            <span class="badge bg-primary rounded-pill">Ver detalle</span>
          </RouterLink>
        </ul>
        <div class="text-center mt-4">
          <RouterLink :to="{ name: 'home' }">Volver al inicio</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>