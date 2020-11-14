<template>
<div>
  <h1>Olá, {{ user }}</h1>
  <p>
    <router-link :to="{
          name: 'invoices'
        }">Ver pedidos</router-link>
  </p>
  <button @click="logOut" class="btn">Sair</button>
</div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      user: store.user
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    }
  }
};
</script>
