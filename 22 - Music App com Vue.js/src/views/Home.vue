<template>
<div class="home">
  <vuetify-audio color="deep-purple" flat :file="file.url" downloadable autoPlay></vuetify-audio>
  <v-divider></v-divider>
  <v-list two-line>
    <v-list-item v-for="track in tracks" :key="track.name" @click="changeTrack(track)">
      <v-list-item-content>
        <v-list-item-title>{{track.name}}</v-list-item-title>
        <v-list-item-subtitle>{{track.artist}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</div>
</template>

<script>
export default {
  components: {
    VuetifyAudio: () => import('../components/VuetifyAudio'),
  },
  data: () => ({
    tracks: [{
        url: 'assets/music/Blinded.mp3',
        name: 'Blinded',
        artist: 'Deep Chills feat. Emma'
      },
      {
        url: 'assets/music/Riptide.mp3',
        name: 'Riptide',
        artist: 'FlicFlac'
      },
      {
        url: 'assets/music/StillThinkAboutYou.mp3',
        name: 'Still Think About You',
        artist: 'Deep Chills feat. MAZE'
      },
      {
        url: 'assets/music/BirdsFlyingHigh.mp3',
        name: 'Birds Flying High',
        artist: 'MÖWE'
      },
    ],
    file: {
      url: null,
      name: null,
      artist: null
    },
  }),
  created() {
    this.file = this.tracks[0]
  },
  methods: {
    changeTrack(track) {
      this.file = track;
    }
  }
}
</script>

<style scoped>
.v-main__wrap .v-card,
.v-list {
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
}

.v-list-item {
  cursor: pointer;
}
</style>
