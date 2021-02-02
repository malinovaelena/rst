<template>
    <div class="ui-modal__outer">
        <div class="ui-modal" v-click-outside="close">
            <div class="ui-modal__heading">
                <div class="ui-modal__title">
                    <slot name="title" />
                </div>
                <div class="ui-modal__close" @click="close">+</div>
            </div>
            <div class="ui-modal__body">
                <slot />
            </div>
            <div class="ui-modal__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ui-modal',

  data() {
    return {
    };
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style>
.ui-modal__outer {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: rgba(0,0,0,0.2);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-modal {
  width: 450px;
  background: #fff;
  border: 1px solid black;
  padding: 20px;
  text-align: left;
  border-radius: 2px;
}

.ui-modal__heading {
  display: flex;
  justify-content: space-between;
}

.ui-modal__title {
  font-size: 20px;
}

.ui-modal__close {
  cursor: pointer;
  transform: rotate(45deg);
  font-size: 20px;
  line-height: 16px;
}

.ui-modal__body {
  padding: 30px 0;
}
</style>
