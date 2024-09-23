<template>
    <div class="sidebar">
      <div class="logo-container">
        <img src="" alt="Logo da Empresa" class="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/" class="nav-link">
                <i class="fa-solid fa-house-laptop"></i> Início
            </router-link>
          </li>
          <li>
            <router-link to="/cadastrar-aposta" class="nav-link">
                <i class="fa-solid fa-chalkboard-user"></i> Cadastrar Entrada
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "NavBar",
    methods: {
      }
    }
  </script>
  
  <style scoped>
  .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #027333;
  color: #FFFFFF;
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
  z-index: 1000; /* Garante que a barra lateral sempre fique no topo */
}

.main-content {
  margin-left: 250px; /* Deixa espaço para o conteúdo ao lado da sidebar */
}
  .logo-container {
    text-align: center;
    padding: 20px;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    padding: 15px;
    text-align: center;
  }
  
  nav ul li:hover {
    background-color: #cccccc;
  }
  
  nav ul li a {
    color: #FFFFFF; /* Links em branco */
    text-decoration: none;
    
  }
  
  
  .nav-link i {
    margin-right: 5px;
  }
  
  .logout-section {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 20px; 
  }
  
  </style>
  