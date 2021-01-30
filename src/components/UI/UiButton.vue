<template>
    <button @click="click"
      class="ui-button">
        <slot />
    </button>
</template>
<script>
export default {
  name: 'ui-button',

  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
<style>
.ui-button {
  border-radius: 30px;
  padding: 5px 10px;
  border: 1px solid black;
  background: lightgray;
  cursor: pointer;
}
</style>
