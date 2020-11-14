<template>
<span class="go-back">
  <button @click="goBack">voltar</button>
</span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
}

button {
  border: 0;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  background-color: #2EC4B6;
  color: #111111;
  padding: 5px 20px;
  border-radius: 20px;
}
</style>
