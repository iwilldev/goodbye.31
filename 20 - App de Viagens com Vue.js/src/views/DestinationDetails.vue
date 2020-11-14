<template>
<div>
  <section>
    <GoBack />
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Grandes experiências: {{destination.name}}</h2>
    <div class="cards" id="experience">
      <div :key="experience.slug" v-for="experience in destination.experiences" class="card">
        <router-link :to="{name: 'experienceDetails', params: {experienceSlug: experience.slug}, hash: '#experience'}">
          <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
          <span class="card__text">
            {{experience.name}}
          </span>
        </router-link>
      </div>
    </div>
    <transition name="fade-experience" mode="out-in">
      <router-view :key="$route.params.experienceSlug" />
    </transition>
  </section>
</div>
</template>

<script>
import store from '@/store.js'
import GoBack from "@/components/GoBack.vue"

export default {
  data() {
    return {}
  },
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.destination-details {
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;

  img {
    width: 100%;
    max-width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 3px 3px 3px #11111155;
  }

  p {
    width: 100%;
    max-width: 350px;
    text-align: left;
    align-self: flex-end;
  }
}

.experiences {
  padding: 40px 0;

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card {
      position: relative;

      img {
        width: 100%;
        max-width: 200px;
        height: 200px;
        object-fit: cover;
        filter: brightness(50%);

      }

      .card__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}

.fade-experience-enter-active,
.fade-experience-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-experience-enter,
.fade-experience-leave-to {
  opacity: 0;
  transform: translateY(2%);
}
</style>
