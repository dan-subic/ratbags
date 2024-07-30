<template>
    <p>
      {{ msg }}
      <roll-table :cols="4" :content="names.male" transpose/>
    </p>
</template>
  
<script>

import "../roll-table.vue"
import RollTable from "../roll-table.vue";
import {names} from "../../../.data/names.ts";

export default {
  components: {
    RollTable,
  },
  data() {
    return {
      msg: 'Hello this is <demo-component>'
    }
  },
  computed: {
    names() {
      return names
    },
  },
}
</script>
