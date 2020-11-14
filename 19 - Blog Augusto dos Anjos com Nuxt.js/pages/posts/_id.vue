<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3>Você também pode gostar:</h3>
      <ul>
        <li v-for="related in relatedPosts" :key="related.id">
          <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">{{ related.title }}</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    head () {
      return {
        title: this.post.title,
        meta: [
          { name: 'twitter:title', content: this.post.title },
          { name: 'twitter:description', content: this.post.content },
          { name: 'twitter:image', content: '~/assets/augusto.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      }
    },
    computed: {
      post() {
        return this.$store.state.posts.all.find(post => post.id === this.id)
      },
      relatedPosts() {
        return this.$store.state.posts.all.filter(post => post.id !== this.id)
      },
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  @media(max-width: 700px) {
    .container {
      flex-direction: column;
    }
  }
  article p {
    white-space: pre-line;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
  }
  @media(max-width: 700px) {
    aside {
      margin-top: 2rem;
    }
  }
  aside ul {
    margin-top: 10px;
    margin-left: -20px;
  }
  .title {
    font-size: 2rem;
  }
</style>