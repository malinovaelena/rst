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
            <table-row v-for="contact in parsedData"
              :key="contact.ID"
              :item="contact"/>
        </div>
    </div>
</template>
<script>
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import TableRow from './TableRow';

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
        this.parsedData = this.items;
       // this.parsedData = createddTree(values);
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
