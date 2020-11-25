<template>
<v-app>
  <v-app-bar color="deep-purple lighten-1" app dark>
    <div class="d-flex align-center">
      Music App
    </div>

    <v-spacer></v-spacer>

    <router-link class="menu-link" :to="{name: 'Home'}">Player</router-link>
    <router-link class="menu-link" :to="{name: 'About'}">Sobre</router-link>
  </v-app-bar>

  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>

</script>

<style>
a.menu-link {
  color: #fff !important;
  margin-left: 10px;
  text-decoration: none;
}
</style>
