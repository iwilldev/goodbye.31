<template>
  <div id="app">
    <header>
      <h1>Painel de Atividades</h1>
      <div class="input-container">
        <p>Adicionar Item: </p>
        <form @submit.prevent="() => {
            addCard(newCard);
            newCard='';
        }">
          <input type="text" v-model="newCard">
          <button prevent>Adicionar</button>
        </form>
      </div>
    </header>
    <main class="flexbox">
      
      <Board id="board-1">
        <p>Pendente</p>
        <Card v-for="card of cards" :key="cards[card]" :id="card" draggable="true">
          <p>{{ card }}</p>
        </Card>
      </Board>

      <Board id="board-2">
        <p>Em andamento</p>
      </Board>

      <Board id="board-3">
        <p>Finalizado</p>
      </Board>

    </main>
    <a href="https://omagotemum.site">Made by Mago</a>
  </div>
</template>

<script>

  import Board from './components/Board';
  import Card from './components/Card';

export default {
  name: 'App',
  components: {
    Board,
    Card
  },
  data() {
    return {
      newCard: '',
      cards: [
        
      ]
    }
  },
  methods: {
    addCard: function(card) { 
      console.log();
      this.cards.push(card); 
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  background: #202020;
}

#app {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 15px;

  width: 100%;
  max-width: 1000px;
}

header .input-container {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

header .input-container input {
  margin-left: 1rem;
  padding: 0 10px;
  height: 2rem;
}

header .input-container button {
  height: 2rem;
  border: 0;
  padding: 0 10px;
  background: rgb(47, 116, 47);
  color: #f0f0f0;
}

.flexbox {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 650px;

  overflow: hidden;
}

.flexbox .board {
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 300px;

  overflow-x: hidden;

  background: #404040;
  border-radius: 20px;

  padding: 15px;
}

.flexbox .board:not(:last-child) {
  margin-right: 0.5rem;
  
}

.flexbox .board#board-1 {
  background: brown;
}

.flexbox .board#board-2 {
  background: rgb(12, 105, 197);
}

.flexbox .board#board-3 {
  background: rgb(47, 116, 47);
}

.flexbox .board > p {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.flexbox .board .card {
  color: #111;
  background: #f0f0f0aa;
  border-radius: 10px;

  cursor: move;

  margin-bottom: 15px;
  padding: 15px 25px;
}

main + a {
  color: #f0f0f0;
  text-decoration: none;
  margin-top: 0.5rem;
}

</style>
