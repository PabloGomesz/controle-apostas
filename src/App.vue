<template>
  <div id="app">
    <NavBar /> <!-- Colocando o NavBar ao lado do conteúdo -->
    <div class="main-content">
      <router-view /> <!-- Aqui é onde as rotas renderizam o conteúdo -->
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.main-content {
  flex-grow: 1; /* Permite que o conteúdo ocupe o resto do espaço */
  padding: 20px;
  background-color: #f4f4f4;
  overflow-y: auto;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

</style>
