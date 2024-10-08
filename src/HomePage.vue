<template>
  <div class="main-content">
    <h1>Controle de Ganhos e Perdas</h1>

    <div class="tabela-apostas">
      <h2>Apostas Cadastradas</h2>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor (R$)</th>
            <th>Data</th>
            <th>Retorno (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aposta, index) in apostas" :key="index">
            <td>{{ aposta.descricao }}</td>
            <td>{{ aposta.valor }}</td>
            <td>{{ aposta.data }}</td>
            <td>{{ aposta.retorno }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="graficos">
      <!-- Gráfico de barras acima -->
      <div class="grafico-barras">
        <h2 class="text-graficos">Gráfico de Ganhos e Perdas por Aposta</h2>
        <canvas id="ganhosPerdasChart"></canvas>
      </div>

      <!-- Gráfico de pizza com descritivo ao lado -->
      <div class="grafico-descritivo">
        <div class="grafico">
          <h2 class="text-graficos">Gráfico Pizza de Lucro e Prejuízo Total</h2>
          <canvas id="pizzaGanhosPerdasChart"></canvas>
        </div>

        <div class="descritivo">
          <h3>Descrição:</h3>
          <ul>
            <li>
              <span class="color-box" style="background-color: rgba(75, 192, 192, 0.6);"></span>
              Lucro Total
            </li>
            <li>
              <span class="color-box" style="background-color: rgba(255, 99, 132, 0.6);"></span>
              Prejuízo Total
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, BarController, BarElement, CategoryScale, LinearScale, PieController, ArcElement, Tooltip } from 'chart.js';

export default {
  name: 'HomePage',
  data() {
    return {
      apostas: [],
      barChart: null,
      pieChart: null,
    };
  },
  mounted() {
    this.loadApostas();
    this.createCharts();
  },
  methods: {
    loadApostas() {
      const apostasStorage = JSON.parse(localStorage.getItem('apostas'));
      this.apostas = apostasStorage || [];
    },
    createCharts() {
      // Registrar componentes do Chart.js, incluindo Tooltip
      Chart.register(BarController, BarElement, CategoryScale, LinearScale, PieController, ArcElement, Tooltip);

      // Processar dados de apostas para calcular ganhos/perdas
      const ganhosPerdas = this.apostas.map(aposta => aposta.retorno - aposta.valor);
      const ganhos = ganhosPerdas.filter(gp => gp > 0);
      const perdas = ganhosPerdas.filter(gp => gp < 0).map(gp => Math.abs(gp));

      // Criar gráfico de barras mostrando ganhos e perdas por aposta (barras verticais)
      const ctxBar = document.getElementById('ganhosPerdasChart').getContext('2d');
      this.barChart = new Chart(ctxBar, {
        type: 'bar', // Tipo de gráfico de barras verticais
        data: {
          labels: this.apostas.map(aposta => aposta.descricao), // Nomes das apostas
          datasets: [
            {
              label: 'Ganhos (R$)',
              data: ganhosPerdas.map(gp => (gp > 0 ? gp : 0)),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              label: 'Perdas (R$)',
              data: ganhosPerdas.map(gp => (gp < 0 ? Math.abs(gp) : 0)),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true, // O eixo Y começa em zero
            },
          },
          plugins: {
            tooltip: {
              enabled: true, // Habilitar tooltips
              callbacks: {
                label: function (context) {
                  const label = context.dataset.label || '';
                  const value = context.raw;
                  return `${label}: R$ ${value.toFixed(2)}`;
                },
              },
            },
          },
        },
      });

      // Criar gráfico de pizza mostrando lucros e prejuízos totais
      const totalGanhos = ganhos.reduce((acc, val) => acc + val, 0);
      const totalPerdas = perdas.reduce((acc, val) => acc + val, 0);

      const ctxPie = document.getElementById('pizzaGanhosPerdasChart').getContext('2d');
      this.pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: ['Lucro Total', 'Prejuízo Total'],
          datasets: [
            {
              data: [totalGanhos, totalPerdas],
              backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              enabled: true, // Habilitar tooltips
              callbacks: {
                label: function (context) {
                  const label = context.label || '';
                  const value = context.raw;
                  return `${label}: R$ ${value.toFixed(2)}`;
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.main-content {
  color: #333333;
  margin-left: 250px;
  font-family: 'Poppins', sans-serif;
}

h1 {
  
  color: #333;
}

.tabela-apostas {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.graficos {
  display: flex;
  flex-direction: column; /* Alterar a direção para coluna */
  align-items: center;
  margin-top: 30px;
}

.grafico-barras{
  width: 80%; 
  margin-bottom: 30px;
}

.grafico {
  width: 50%; 
  margin-bottom: 30px; 
  margin-left: 200px;
}

.grafico-descritivo {
  display: flex;
  justify-content: space-between; /* Gráfico de pizza e descritivo lado a lado */
  align-items: center;
  width: 100%;
  margin-bottom: 30px; /* Espaçamento entre o gráfico de barras e o gráfico pizza */
}

.descritivo {
  width: 20%;
  margin-left: 10px; /* Diminuí a margem para aproximar o descritivo do gráfico */
}

.descritivo ul {
  list-style: none;
  padding: 0;
}

.descritivo li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
}

canvas {
  max-width: 100%;
}

.text-graficos{
  text-align: center;
  margin-bottom: 80px;
  margin-top: 80px;
}
</style>
