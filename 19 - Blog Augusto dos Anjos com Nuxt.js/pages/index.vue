<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Augusto dos Anjos
      </h1>
      <h2 class="subtitle">
        o melhor do melhor
      </h2>
      <div class="links">
        <nuxt-link 
          :key="post.id"
          v-for="post in posts"
          :to="{name: 'posts-id', params: {id: post.id}}"
          class="button--blue"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'AuNuxt dos Anjos',
      meta: [
        { name: 'twitter:title', content: 'AuNuxt dos Anjos' },
        { name: 'twitter:description', content: 'Blog criado com Nuxt.js, com alguns poemas do mestre Augusto dos Anjos' },
        { name: 'twitter:image', content: '~/assets/augusto.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ]
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.all
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 36px;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
