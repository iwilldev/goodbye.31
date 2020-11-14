<template>
<div id="app">
  <TheNavigation />
  <transition name="fade" mode="out-in">
    <router-view :key="$route.params.slug" />
  </transition>
</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'

export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  padding: 0 10px;
  background: #FF9F1C;
  min-height: 100vh;
}

h1,
h2 {
  text-shadow: 2px 2px 2px #11111155;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(2%);
}

.input {
  border: 1px solid #2EC4B6;
  padding: 10px;
  margin-bottom: 20px;
}

.btn {
  background-color: #2EC4B6;
  color: #111111;
  padding: 10px;
  font-weight: 600;
}

input,
button {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
}
</style>
