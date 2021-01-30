<template>
    <div class="table">
        <div class="table__heading">
          <div class="table-row">
            <div>
                <div class="table-cell__name" @click="sortByName">
                    Имя
                </div>
                <div class="table-cell__phone" @click="sortByValue">
                    Телефон
                </div>
            </div>
          </div>
        </div>
        <div class="table__body">
            <table-row v-for="contact in parsedData" :key="contact.ID" :item="contact"/>
        </div>
    </div>
</template>
<script>
import TableRow from './TableRow';

const createTree = (arr) => {
  const test = [];
  arr.forEach((el) => {
    if (el.Director) {
      // eslint-disable-next-line eqeqeq
      const director = arr.find(i => i.ID == el.Director);
      test.push({
        ...el,
        Director: director,
      });
    } else {
      test.push(el);
    }
  });

  return test;
};

export default {
  name: 'main-table',

  components: {
    TableRow,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    tableHeading: {
      type: [Array, Object],
      default: () => [],
    },
  },

  data() {
    return {
      parsedData: () => [],
      sortAscending: 1,
    };
  },

  created() {
    this.parsedData = createTree(this.items);
  },

  methods: {
    toggleSort() {
      this.sortAscending = this.sortAscending === 1 ? -1 : 1;
    },

    sortByName() {
      const sorted = this.parsedData.sort((a, b) => {
        if (a.Name > b.Name) {
          return this.sortAscending;
        }
        if (a.Name < b.Name) {
          return this.sortAscending - 2;
        }
        return 0;
      });
      this.parsedData = sorted;
    },

    sortByValue() {
      const sorted = this.parsedData.sort((a, b) => {
        if (a.Phone > b.Phone) {
          return this.sortAscending;
        }
        if (a.Phone < b.Phone) {
          return this.sortAscending - 2;
        }
        return 0;
      });
      this.parsedData = sorted; 
    },
  },
};
</script>
<style>
.table {
  width: 500px;
}
</style>
