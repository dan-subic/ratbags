<template>
  <table-base-compressed :content="content" :vertical="vertical"/>
</template>

<script>
import TableBaseCompressed from "../base/compressed.vue"
import { mutations } from "../../../../.data/mutations.ts"
import { items } from "../../../../.data/items.ts"

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
      case 'armor': {
        this.content = items.armor
        break
      }
      case 'helmets-shields': {
        this.content = items.helmets_shields
        break
      }
      case 'weapons': {
        this.content = items.weapons
        this.vertical = true
        break
      }
      case 'bonus-item': {
        this.content = items.bonus
        break
      }
    }
  },
}
</script>
  