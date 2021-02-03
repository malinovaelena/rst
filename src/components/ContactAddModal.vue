
<template>
    <ui-modal class="contact-add-modal" @close="$emit('close')">
        <template slot="title">
            Добавление пользователя
        </template>
        <div class="contact-add-modal__content">
            <ui-field title="Имя">
                <ui-input @update="addName" />
            </ui-field>
            <ui-field title="Телефон">
                <ui-input @update="addPhone" numeric />
            </ui-field>
            <ui-field title="Начальник" v-if="contacts.length">
                <ui-select @update="addDirector" :items="contacts" />
            </ui-field>
        </div>
        <template slot="footer">
            <ui-button @click="save">Сохранить</ui-button>
        </template>
    </ui-modal>
</template>
<script>
export default {
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

  computed: {
    isValidate() {
      const { Name, Phone } = this.contact;
      return Name && Phone;
    },
  },

  methods: {
    save() {
      if (!this.isValidate) {
        // eslint-disable-next-line no-alert
        alert('Заполните поля - имя и телефон');
        return;
      }

      this.$emit('save', this.contact);
    },

    addPhone(value) {
      this.contact.Phone = value;
    },

    addName(value) {
      this.contact.Name = value;
    },

    addDirector(value) {
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

.contact-add-modal__content .ui-field__input {
  width: 60%;
}
</style>

