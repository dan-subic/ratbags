<template>
  <roll-table :cols="cols" :content="content" />
</template>

<script>
import RollTable from "./roll-table.vue";
import {names} from "../../.data/names.ts";

export default {
  components: {
    RollTable,
  },
  props: {
    table: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      content: [],
      cols: 1,
    }
  },
  mounted() {
    switch(this.table) {
      case 'female-names': {
        this.content = names.female
        this.cols = 4
        break
      }
      case 'male-names': {
        this.content = names.male
        this.cols = 4
        break
      }
      case 'surnames': {
        this.content = names.surnames
        this.cols = 4
        break
      }
    }
  },
}
</script>
  