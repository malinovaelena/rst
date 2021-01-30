<template>
    <div class="ui-input">
      <input v-if="!numeric"
      :placeholder="placeholder"
      v-model="value"/>
      <masked-input v-else v-model="value" mask="+7 911 111 11 11" :placeholder="placeholder" />
    </div>
</template>
<script>
import MaskedInput from 'vue-masked-input';

export default {
  name: 'ui-input',

  components: {
    MaskedInput,
  },

  props: {
    placeholder: {
      type: String,
      default: null,
    },

    numeric: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: '',
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value, prev) {
        if (!this.numeric) {
          const reg = new RegExp('[^a-я|\\s]');
          const valid = !value.match(reg);

          if (!valid) {
            this.value = prev;
          }
        }
        this.$emit('update', value);
      },
    },
  },
};
</script>
<style>
.ui-input {
    display: block;
}
</style>
