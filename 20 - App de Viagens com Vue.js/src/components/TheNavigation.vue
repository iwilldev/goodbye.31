<template>
<nav id="nav">
  <span class="logo">Travueling</span>
  <ul class="nav-links">
    <li class="links"><a @click="showMenu = !showMenu">Menu</a></li>
  </ul>
  <transition name="toggle-menu" mode="out-in">
    <ul v-if="showMenu" class="menu">
      <li class="links" @click="showMenu = !showMenu">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.id" class="links" @click="showMenu = !showMenu">
        <router-link :to="{name: 'destination-details', params: {slug: destination.slug}}">
          {{destination.name}}
        </router-link>
      </li>
      <li class="links" @click="showMenu = !showMenu">
        <router-link to="/user">Login</router-link>
      </li>
    </ul>
  </transition>
</nav>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'TheNavigation',
  data() {
    return {
      destinations: store.destinations,
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  width: calc(100% - 20px);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  position: sticky;
  top: 0;
  margin: 0 -10px;
  background: #2EC4B6;
  z-index: 99;
  box-shadow: 0px 3px 3px #11111155;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;
  }

  a.selected-destination {
    color: #2EC4B6;
  }

  .nav-links {
    display: flex;
    align-items: center;

  }

  .links {
    gap: 20px;
    list-style: none;

    :hover {
      text-decoration: underline;
    }

    :last-child {
      padding-top: 20px;
    }
  }

  .menu {
    position: absolute;
    text-align: right;

    display: flex;
    flex-direction: column;
    top: 50px;
    left: 0;
    right: 0;

    margin: 0;
    padding: 20px;

    background: #f0f0f0;

    gap: 20px;

    z-index: 98;
  }
}

.toggle-menu-enter-active,
.toggle-menu-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.toggle-menu-enter,
.toggle-menu-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

.logo {
  color: #111111;
  font-size: 20px;
  font-weight: bold;
  margin-right: auto;
}
</style>
