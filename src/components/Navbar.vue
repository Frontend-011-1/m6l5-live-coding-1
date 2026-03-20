<script setup>
const routes = [
  { name: 'home', label: 'Home' },
  { name: 'productos', label: 'Productos' }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="route in routes" :key="route.label">
            <RouterLink class="nav-link" active-class="active" :to="{ name: route.name }">{{ route.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>