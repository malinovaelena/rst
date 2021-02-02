
<template>
    <div class="table">
        <div class="table__heading">
          <div class="table-row">
            <div>
                <div class="table-cell__name" @click="addSorting('Name')">
                    Имя
                </div>
                <div class="table-cell__phone" @click="addSorting('Phone')">
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
/* eslint-disable eqeqeq */
import TableRow from './TableRow';

const createTree = (arr) => {
  const items = [];
  arr.forEach((el) => {
    if (el.Director) {
      const director = arr.find(i => i.ID == el.Director);
      items.push({
        ...el,
        Director: director,
      });
    } else {
      items.push(el);
    }
  });

  return items;
};

const parsePhone = item => parseInt(item.replaceAll(' ', ''), 0);

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
      parsedData: [],
      sortAscending: false,
      sortItem: null,
    };
  },

  watch: {
    items: {
      immediate: true,
      handler(values) {
        this.parsedData = createTree(values);
      },
    },
  },

  methods: {
    addSorting(value) {
      this.sortItem = value;
      this.sortAscending = !this.sortAscending;

      this.parsedData = this.sort();
    },

    sort() {
      const { sortItem, parsedData, sortAscending } = this;
      const sorted = parsedData;

      if (sortItem === 'Name') {
        sorted.sort((a, b) => a.Name.localeCompare(b.Name));
      } else {
        sorted.sort((a, b) => parsePhone(a.Phone) - parsePhone(b.Phone));
      }
      if (!sortAscending) return sorted.reverse();
      return sorted;
    },
  },
};
</script>
<style>
.table {
  width: 500px;
}
</style>
