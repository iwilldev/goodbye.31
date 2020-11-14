<template>
<section>
  <div class="experience-details">
    <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
    <div>
      <h2>{{experience.name}}</h2>
      <p>{{experience.description}}</p>
    </div>
  </div>
</section>
</template>

<script>
import store from '@/store.js'

export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      )
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      )
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  max-width: 400px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 3px 3px 3px #11111155;
}

.experience-details {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 50px;
}

p,
h2 {
  width: 100%;
  max-width: 350px;
  align-self: flex-start;
  text-align: left;
}
</style>
