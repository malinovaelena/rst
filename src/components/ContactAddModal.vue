
<template>
    <ui-modal class="contact-add-modal" @close="$emit('close')">
        <template slot="title">
            Добавление пользователя
        </template>
        <div class="contact-add-modal__content">
            <ui-field title="Имя">
                <ui-input @update="updateName" />
            </ui-field>
            <ui-field title="Телефон">
                <ui-input @update="updatePhone" numeric />
            </ui-field>
            <ui-field title="Начальник" v-if="contacts.length">
                <ui-select @update="updateDirector" :items="contacts" />
            </ui-field>
        </div>
        <template slot="footer">
            <ui-button @click="save">Сохранить</ui-button>
        </template>
    </ui-modal>
</template>
<script>

import UiButton from './UI/UiButton';
import UiField from './UI/UiField';
import UiInput from './UI/UiInput';
import UiModal from './UI/UiModal';
import UiSelect from './UI/UiSelect';


export default {
  components: {
    UiModal,
    UiButton,
    UiField,
    UiInput,
    UiSelect,
  },

  name: 'contact-add-modal',

  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      contact: {
        Name: '',
        Phone: '',
        Director: '',
      },
      items: [],
    };
  },

  methods: {
    save() {
      this.$emit('save', this.contact);
    },

    updatePhone(value) {
      this.contact.Phone = value;
    },

    updateName(value) {
      this.contact.Name = value;
    },

    updateDirector(value) {
      this.contact.Director = value;
    },
  },
};
</script>
<style>
.contact-add-modal__content .ui-field {
  padding: 10px 0;
}
.contact-add-modal__content .ui-field__title {
  width: 40%;
}
</style>

