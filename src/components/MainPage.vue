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

const DATA = [
  {
    ID: 1,
    Name: 'Марина',
    Phone: '+ 7 923 232 44 41',
    Director: null,
    // Subordinates: [],
  },
  {
    ID: 2,
    Name: 'Петр',
    Phone: '+ 7 923 232 44 49',
    Director: null,
    // Subordinates: [],
  },
  {
    ID: 3,
    Name: 'Алексей',
    Phone: '+ 7 923 232 44 44',
    Director: null,
    // Subordinates: [],
  },
  {
    ID: 4,
    Name: 'Иван',
    Phone: '+ 7 923 232 44 46',
    Director: null,
    // Subordinates: [],
  },
  {
    ID: 5,
    Name: 'Борис',
    Phone: '+ 7 923 232 44 40',
    Director: null,
    // Subordinates: [],
  },
];

const TABLE_HEAD = {
  Name: 'Имя',
  Phone: 'Телефон',
};

const find = (arr, id, items) => {
  const director = arr.find(item => item.ID == id);
  if (director) {
    director.Subordinates = [...items];
    return arr;
  }
  // eslint-disable-next-line prefer-const
  for (let i of arr) {
    if (i.Subordinates) return find(i.Subordinates, id, items);
  }
};

const createddTree = (arr) => {
  const items = [];
  const directors = arr.filter(item => item.Director == null);
  const allSubordinates = arr.filter(item => item.Director);

  items.push(...directors);

  const groupsSubordinates = {};
  // eslint-disable-next-line prefer-const
  for (let item of allSubordinates) {
    if (groupsSubordinates[item.Director] == undefined) {
      groupsSubordinates[item.Director] = [item];
    } else {
      groupsSubordinates[item.Director].push(item);
    }
  }

  items.forEach((i) => {
    if (groupsSubordinates[i.ID]) {
      // eslint-disable-next-line no-param-reassign
      i.Subordinates = [...groupsSubordinates[i.ID]];
      groupsSubordinates[i.ID] = undefined;
    }
  });
  for (let r in groupsSubordinates) {
    if (groupsSubordinates[r]) return find(items, r, groupsSubordinates[r]);
  }

  return items;
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
      tableData: () => [],
      parsed: [],
    };
  },

  watch: {
    tableData: {
      immediate: true,
      handler(value) {
        this.parsed = createddTree(value);
      }
    }
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
      this.tableData.push(empl);
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
