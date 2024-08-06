<template>
  <table-base-compressed :content="content" :vertical="vertical"/>
</template>

<script>
import TableBaseCompressed from "../base/compressed.vue"
import { mutations } from "../../../../.data/mutations.ts"

export default {
  components: {
    TableBaseCompressed,
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
      vertical: false,
    }
  },
  mounted() {
    switch(this.table) {
      case 'mutation-type': {
        this.content = mutations.type
        break
      }
    }
  },
}
</script>
  