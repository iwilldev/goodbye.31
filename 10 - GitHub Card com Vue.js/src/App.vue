<template>
  <div id="app" class="ui container">
    <p class="search-span">Digite um nome de usuário e pressione enter:</p>
    <div class="ui input">
      <input v-model="username" @keyup.enter="searchKey += 1" type="text" placeholder="Busque um usuário">
    </div>
    <div id="card-area">
      <i class="devicon-github-plain-wordmark"></i>
      <GithubCard :username="username" :search-key="searchKey" />
    </div>
  </div>
</template>

<script>

import GithubCard from './components/GithubCard';

export default {
  name: 'App',
  data() { 
    return {
      username: 'euwilliamgoncalves',
      searchKey: 0,
    }
  },
  components: {
    GithubCard
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0773b1;
    color: antiquewhite;
  }

  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p.search-span {
    margin: 1.5em 0 0.5em 0;
  }

  #card-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #000;
    border-radius: 5px;
  }

  #card-area > i {
    font-size: 36px;
  }

  .ui.button {
    width: 320px;
    margin-top: 1em;
  }

  .ui.input {
    width: 320px;
    margin-bottom: 1em;
  }

</style>
