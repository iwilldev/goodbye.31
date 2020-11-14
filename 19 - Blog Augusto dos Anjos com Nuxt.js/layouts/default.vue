<template>
  <div class="container">
    <TheNavbar/>
    <nuxt/>
    <div class="footer">
      <a href="https://omagotemum.site" target="_blank" rel="noreferrer no opener">Made by Mago</a>
    </div>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  export default {
    components: {
      TheNavbar
    }
  }
</script>

<style scoped>
  .footer {
    width: 100%;

    padding: 50px 0 25px 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>