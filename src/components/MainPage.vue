<template>
    <div class="main-page">
        <ui-button @click="open"
        class="main-page__open-modal">Добавить</ui-button>
        <main-table :items="parsed" :tableHeading="tableHeading" />
        <contact-add-modal v-if="IsModalOpen" @save="save" @close="close" :contacts="tableData" />
    </div>
</template>
<script>
import ContactAddModal from './ContactAddModal';
import MainTable from './MainTable';

const findDirector = (arr, item) => {
  const indDirector = arr.findIndex(i => i.ID == item.Director);
  if (indDirector > -1) {
    if (arr[indDirector].Subordinates) {
      arr[indDirector].Subordinates.push(item);
    }
    return arr[indDirector].Subordinates = [item];
  }
  for (let i of arr) {
    if (i.Subordinates) return findDirector(i.Subordinates, item);
  }
}

const DATA = [
  {
    ID: 1,
    Name: 'Марина',
    Phone: '+ 7 923 232 44 41',
    Director: null,
    Subordinates: [],
  },
  {
    ID: 2,
    Name: 'Петр',
    Phone: '+ 7 923 232 44 49',
    Director: null,
    Subordinates: [],
  },
  {
    ID: 3,
    Name: 'Алексей',
    Phone: '+ 7 923 232 44 44',
    Director: null,
    Subordinates: [],
  },
  {
    ID: 4,
    Name: 'Иван',
    Phone: '+ 7 923 232 44 46',
    Director: null,
    Subordinates: [],
  },
  {
    ID: 5,
    Name: 'Борис',
    Phone: '+ 7 923 232 44 40',
    Director: null,
    Subordinates: [],
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

  updated() {
    this.saveInStorage();
  },

  data() {
    return {
      IsModalOpen: false,
      tableHeading: TABLE_HEAD,
      tableData: [],
      parsed: [],
    };
  },

  watch: {
    tableData: {
      immediate: true,
      handler() {
        this.parsed = this.tableData;
      },
    },
  },

  methods: {
    open() {
      this.IsModalOpen = true;
    },

    saveInStorage() {
      const parsed = JSON.stringify(this.tableData);
      localStorage.setItem('table-data', parsed);
    },

    save(item) {
      const empl = {
        ...item,
        ID: this.tableData.length + 1,
      };

      findDirector(this.tableData, empl);
      this.IsModalOpen = false;
    },

    close() {
      this.IsModalOpen = false;
    },
  },
};
</script>
<style>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: min-content;
}

.main-page__open-modal {
  margin-bottom: 50px;
}
</style>
