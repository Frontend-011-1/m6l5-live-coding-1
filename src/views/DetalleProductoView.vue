<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import productos from '@/data/productos.json'

const producto = ref({})
const route = useRoute() // lo que antes hacia $route

producto.value = productos.find(producto => producto.id == route.params.id)
</script>

<template>
  <div class="py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="border rounded p-4 my-4 shadow-sm">
          <h2>{{ producto.nombre }}</h2>
          <p>${{ producto.precio }}</p>
          <RouterLink :to="{ name: 'opiniones', params: { id: producto.id } }">Opiniones</RouterLink>

          <RouterView />
          <RouterLink :to="{ name: 'producto', params: { id: producto.id } }" v-if="route.name !== 'producto'">Cerrar
            opiniones</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>