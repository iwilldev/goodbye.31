<template>

  <div class="ui card">
    <div class="image">
      <img class="avatar-image" :src="user.avatar_url">
    </div>
    <div class="content">
      <a :href="`https://github.com/${username}`" class="header">{{ user.name }}</a>
      <div class="meta">
        <span class="text">{{ user.location }}</span>
      </div>
      <div class="description">
        {{ user.bio }}
      </div>
    </div>
    <div class="extra content">
      <a :href="`https://github.com/${username}?tab=followers`">
        <i class="user icon"></i>
        {{ user.followers }} seguidores
      </a>
    </div>
    <div class="extra content">
      <a :href="`https://github.com/${username}?tab=repositories`">
        <i class="book icon"></i>
        {{ user.public_repos }} repositórios
      </a>
    </div>
    <div class="extra content">
      <a :href="`https://github.com/${username}?tab=repositories`">
        <i class="code icon"></i>
        {{ mostUsedLanguage }} é a linguagem mais usada
      </a>
    </div>
  </div>
    
</template>

<script>

  import axios from 'axios';

  export default {
    name: 'GithubCard',
    props: {
      username: {
        type: String,
        required: true
      },
      searchKey: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        user: {},
        mostUsedLanguage: ''
      }
    },
    created() {
      axios.get(`https://api.github.com/users/${this.username}`)
      .then(response => {
        this.user = response.data;
      })
      let languageList = []
      axios.get(`https://api.github.com/users/${this.username}/repos`)
      .then(response => {
        response.data.map(repository => {
          if (repository.language) {
            let { language } = repository;
            languageList.push(language)
          }
        })
        this.mostUsedLanguage = this.findMostFrequentLanguage(languageList)
      })
    },
    watch: {
      searchKey: function() {
        axios.get(`https://api.github.com/users/${this.username}`)
        .then(response => {
          this.user = response.data
        })
        let languageList = []
        axios.get(`https://api.github.com/users/${this.username}/repos`)
        .then(response => {
          response.data.map(repository => {
            if (repository.language) {
              let { language } = repository;
              languageList.push(language)
            }
          })
          this.mostUsedLanguage = this.findMostFrequentLanguage(languageList)
        })
      }
    },
    methods: {
      findMostFrequentLanguage: (myArray) =>
        myArray.reduce((a,b,i,arr) =>
          (arr.filter(language => language === a).length >= arr.filter(language => language === b).length ? a : b),null)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ui.card > .image > img {
    width: 160px;
    margin: 10px auto;
    border-radius: 50%;
  }

  .ui.card .meta {
    color: rgba(0, 0, 0, 0.75);
  }

  .ui.card > .content > .description {
    color: rgba(0,0,0,.75);
  }

  .ui.card > .extra a:not(.ui) {
    color: rgba(0,0,0,.75);
  }

</style>
