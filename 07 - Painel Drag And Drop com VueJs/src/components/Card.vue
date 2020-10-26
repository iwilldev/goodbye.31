<template>
  <div 
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragIt"
    @dragover.stop
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: ['id', 'draggable'],
  methods: {
    dragIt: e => {
      const target = e.target;

      e.dataTransfer.setData('card_id', target.id);

      setTimeout(() => {
        target.style.display = "none";
      }, 0)
    }
  }
}
</script>