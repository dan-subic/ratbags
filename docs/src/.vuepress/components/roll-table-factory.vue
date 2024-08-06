<template>
  <roll-table :cols="cols" :content="content" />
</template>

<script>
import RollTable from "./roll-table.vue"
import {names} from "../../.data/names.ts"
import { backgrounds } from "../../.data/backgrounds.ts"
import { traits } from "../../.data/traits.ts"
import { mutations } from "../../.data/mutations.ts"
import { items } from "../../.data/items.ts"
import { wands } from "../../.data/wands.ts"

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
      case 'backgrounds': {
        this.content = backgrounds
        this.cols = 4
        break
      }
      case 'physique': {
        this.content = traits.physique
        this.cols = 2
        break
      }
      case 'skin': {
        this.content = traits.skin
        this.cols = 2
        break
      }
      case 'hair': {
        this.content = traits.hair
        this.cols = 2
        break
      }
      case 'face': {
        this.content = traits.face
        this.cols = 2
        break
      }
      case 'speech': {
        this.content = traits.speech
        this.cols = 2
        break
      }
      case 'clothing': {
        this.content = traits.clothing
        this.cols = 2
        break
      }
      case 'virtue': {
        this.content = traits.virtue
        this.cols = 2
        break
      }
      case 'vice': {
        this.content = traits.vice
        this.cols = 2
        break
      }
      case 'reputation': {
        this.content = traits.reputation
        this.cols = 2
        break
      }
      case 'misfortune': {
        this.content = traits.misfortune
        this.cols = 2
        break
      }
      case 'mutation-parts': {
        this.content = mutations.parts
        this.cols = 4
        break
      }
      case 'gear': {
        this.content = items.gear
        this.cols = 4
        break
      }
      case 'tools': {
        this.content = items.tools
        this.cols = 4
        break
      }
      case 'trinkets': {
        this.content = items.trinkets
        this.cols = 4
        break
      }
      case 'wands': {
        this.content = wands
        this.cols = 4
        break
      }
    }
  },
}
</script>
  