<template>
<v-app id="inspire">
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Lista de Tarefas
        </v-list-item-title>
        <v-list-item-subtitle>
          Menu
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app color="primary" dark src="https://picsum.photos/1920/1080?random" prominent>
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
    </template>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Lista de Tarefas</v-toolbar-title>

    <v-spacer></v-spacer>

  </v-app-bar>

  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [{
        title: 'Tarefas',
        icon: 'mdi-format-list-checks',
        to: '/'
      },
      {
        title: 'Sobre',
        icon: 'mdi-help-box',
        to: '/about'
      },
    ],
  }),

}
</script>
