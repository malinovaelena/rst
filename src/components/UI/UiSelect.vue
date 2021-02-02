<template>
    <div class="ui-select">
        <select v-model="selected">
            <option v-for="item in items" :key="item.ID" :value="item.ID">
              <div class="ui-select__option">
                {{ item.Name }}
              </div>
            </option>
        </select>
    </div>
</template>
<script>
export default {
  name: 'ui-select',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selected: null,
    };
  },

  watch: {
    selected(value) {
      this.$emit('update', value);
    },
  },
};
</script>
<style>
.ui-select {
  display: flex;
}

.ui-select select {
  flex-grow: 1;
}
</style>
