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
  border-radius: 13px;
  padding: 5px 16px;
  border: 1px solid black;
  background: lightgray;
  cursor: pointer;
  display: inline-flex;
  width: min-content;
}
</style>
