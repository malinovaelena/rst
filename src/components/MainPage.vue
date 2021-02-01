<template>
    <div class="main-page">
        <ui-button @click="open">Добавить</ui-button>
        <main-table :items="tableData" :tableHeading="tableHeading" />
        <contact-add-modal v-if="IsModalOpen" @save="save" @close="close" :contacts="tableData" />
    </div>
</template>
<script>
import ContactAddModal from './ContactAddModal';
import MainTable from './MainTable';
import UiButton from './UI/UiButton';

const DATA = [
  {
    ID: 1,
    Name: 'Марина',
    Phone: '+ 7 923 232 44 41',
    Director: null,
  },
  {
    ID: 2,
    Name: 'Петр',
    Phone: '+ 7 923 232 44 42',
    Director: null,
  },
  {
    ID: 3,
    Name: 'Але',
    Phone: '+ 7 923 232 44 43',
    Director: null,
  },
  {
    ID: 4,
    Name: 'Иван',
    Phone: '+ 7 923 232 44 45',
    Director: null,
  },
  {
    ID: 5,
    Name: 'Борис',
    Phone: '+ 7 923 232 44 47',
    Director: null,
  },
];

const TABLE_HEAD = {
  Name: 'Имя',
  Phone: 'Телефон',
};

export default {
  name: 'main-page',

  components: {
    MainTable,
    UiButton,
    ContactAddModal,
  },

  created() {
    const data = localStorage.getItem('table-data');
    const parsedData = JSON.parse(data);

    if (Array.isArray(parsedData)) {
      this.tableData = parsedData;
    } else {
      localStorage.removeItem('table-data');
      this.tableData = DATA;
      const updated = JSON.stringify(DATA);
      localStorage.setItem('table-data', updated);
    }
  },

  data() {
    return {
      IsModalOpen: false,
      tableHeading: TABLE_HEAD,
      tableData: () => [],
    };
  },

  methods: {
    open() {
      this.IsModalOpen = true;
    },

    save(item) {
      const empl = {
        ...item,
        ID: this.tableData.length + 1,
      };
      this.tableData.push(empl);
      const parsed = JSON.stringify(this.tableData);
      localStorage.setItem('table-data', parsed);
      this.IsModalOpen = false;
    },

    close() {
      this.IsModalOpen = false;
    },
  },
};
</script>
<style>

</style>
