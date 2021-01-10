<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/"><a class="navbar-brand">gestionnaire produits </a></router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/lister"><a class="nav-item nav-link">lister</a></router-link>
          <router-link to="/nouveau"><a class="nav-item nav-link">ajouter</a></router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  name: 'App',
  
}
</script>

<style>
</style>