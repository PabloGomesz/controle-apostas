<template>
    <div class="cadastrar-aposta">
      <h1>Cadastrar Nova Entrada</h1>
      <form @submit.prevent="cadastrarAposta">
        <div class="form-group">
          <label for="descricao">Descrição da Aposta</label>
          <input v-model="descricao" type="text" id="descricao" required />
        </div>
  
        <div class="form-group">
          <label for="valor">Valor da Aposta (R$)</label>
          <input v-model="valor" type="number" id="valor" required />
        </div>
  
        <div class="form-group">
          <label for="data">Data da Aposta</label>
          <input v-model="data" type="date" id="data" required />
        </div>

        <div class="form-group">
          <label for="retorno">Valor de Retorno (R$)</label>
          <input v-model="retorno" type="number" id="retorno" required />
        </div>
  
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CadastrarAposta',
    data() {
      return {
        descricao: '',
        valor: '',
        data: '',
        retorno: '', // Nova propriedade para o valor de retorno
      };
    },
    methods: {
      cadastrarAposta() {
        console.log('Descrição:', this.descricao);
        console.log('Valor:', this.valor);
        console.log('Data:', this.data);
        console.log('Retorno:', this.retorno);
  
        // Limpa o formulário
        this.descricao = '';
        this.valor = '';
        this.data = '';
        this.retorno = ''; // Limpa o valor de retorno
      },
    },
  };
  </script>
  
  <style scoped>
  .cadastrar-aposta {
    max-width: 550px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    margin-right: 240px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
  margin-bottom: 20px;
  width: 100%; 
}


  h1 {
    font-family: 'Ubuntu', sans-serif;
    color: #333;
    text-align: center;
  }
  
  
  label {
    display: block;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    color: #666;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 110%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  