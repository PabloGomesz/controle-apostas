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

      <!-- Valor de Retorno acima da Data -->
      <div class="form-group">
        <label for="retorno">Valor de Retorno (R$)</label>
        <input v-model="retorno" type="number" id="retorno" required />
      </div>

      <div class="form-group">
        <label for="data">Data da Aposta</label>
        <input v-model="data" type="date" id="data" required />
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
      retorno: '',
    };
  },
  methods: {
    cadastrarAposta() {
      const aposta = {
        descricao: this.descricao,
        valor: this.valor,
        data: this.data,
        retorno: this.retorno
      };

      // Armazena os dados no localStorage
      let apostas = JSON.parse(localStorage.getItem('apostas')) || [];
      apostas.push(aposta);
      localStorage.setItem('apostas', JSON.stringify(apostas));

      console.log('Aposta cadastrada e armazenada no localStorage:', aposta);

      // Limpa o formulário
      this.descricao = '';
      this.valor = '';
      this.data = '';
      this.retorno = '';
    },
  },
};
</script>

<style scoped>
.cadastrar-aposta {
  max-width: 600px;
  margin: 0 auto;
  background-color: #dbdada;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-right: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 100%; /* Aumenta a largura dos inputs */
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 80%; /* Aumenta a largura do botão */
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-left: 20px;
}

button:hover {
  background-color: #45a049;
}

h1 {
  font-family: 'Ubuntu', sans-serif;
  color: #333;
  text-align: center;
}

label {
  font-family: 'Roboto', sans-serif;
  color: #666;
  margin-bottom: 8px;
  text-align: left;
  width: 110%; 
}
</style>
