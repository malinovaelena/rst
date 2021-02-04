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
import TableRow from './TableRow';

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
