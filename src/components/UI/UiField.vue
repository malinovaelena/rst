<template>
    <div class="ui-field">
        <div class="ui-field__title">{{ title }}</div>
        <slot />
    </div>
</template>
<script>
export default {
  name: 'ui-field',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.ui-field {
    display: flex;
    text-transform: capitalize;
}
</style>
