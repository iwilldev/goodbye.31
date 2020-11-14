<template>
<div class="home">
  <h1>Destinos</h1>
  <div class="destinations">
    <div v-for="destination in destinations" :key="destination.name">
      <router-link :to="{name: 'destination-details', params: {slug: destination.slug}}">
        <h2>{{destination.name}}</h2>
      </router-link>
      <figure>
        <router-link :to="{name: 'destination-details', params: {slug: destination.slug}}">
          <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
        </router-link>
      </figure>
    </div>
  </div>
</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Home',
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;

  .destinations {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }

    img {
      max-width: 400px;
      border-radius: 20px;
      box-shadow: 3px 3px 3px #11111155;
    }
  }
}
</style>
