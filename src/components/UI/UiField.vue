<template>
    <div class="ui-field">
        <div class="ui-field__title">{{ title }}</div>
        <div class="ui-field__input"><slot /></div>
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
