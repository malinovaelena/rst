<template>
    <div class="table-row">
        <div>
            <div class="table-cell__name">
                <div v-if="item.Subordinates"
                class="table-cell__has-director">+</div>
                {{ item.Name }}
            </div>
            <div class="table-cell__phone">
                {{ item.Phone }}
            </div>
        </div>
        <template v-if="item.Subordinates">
          <table-row v-for="subordinate in item.Subordinates"
            :item="subordinate"
            :key="subordinate.ID" />
        </template>
    </div>
</template>
<script>
export default {
  name: 'table-row',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.table-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.table-row > div {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.table-row > .table-row {
  flex-wrap: wrap;
  padding-left: 20px;
}

.table-cell__name,
.table-cell__phone {
  border: 1px solid black;
  padding: 7px 5px 7px 20px;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
}

.table-cell__name {
  width:calc(100% - 267px);
}

.table-cell__phone {
  width: 267px;
}

.table-cell__has-director {
  display: inline-flex;
}
</style>
