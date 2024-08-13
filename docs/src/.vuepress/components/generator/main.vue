<template>
  <div>
    Your name is {{ name }}.
    Former profession: {{ background }}

    <h3>Looks</h3>
    <div>Physique: {{ physique }}</div>
    <div>Skin: {{ skin }}</div>
    <div>Hair: {{ hair }}</div>
    <div>Clothing: {{ clothing }}</div>

    <h3>Personality</h3>
    You speak in a {{ speech }} manner. You are {{ vice }}, yet {{ virtue }}. People think you are {{ reputation }}.

  </div>
</template>
  
<script>

import _ from 'lodash'
import { names } from "../../../.data/names.ts" 
import { backgrounds } from "../../../.data/backgrounds.ts"
import { traits } from "../../../.data/traits.ts"
import { mutations } from "../../../.data/mutations.ts"
import { items } from "../../../.data/items.ts"
import { wands } from "../../../.data/wands.ts"
import { gifts } from '../../../.data/gifts.ts'

export default {
  data() {
    return {
      name: '',
      background: '',
      physique: '',
      skin: '',
      hair: '',
      face: '',
      speech: '',
      clothing: '',
      virtue: '',
      vice: '',
      reputation: '',
      misfortune: '',
    }
  },
  mounted() {
    this.generate_all()
  },
  computed: {
  },
  methods: {
    select_random_item(list, keep_case) {
      const item = list[_.random(list.length - 1)]
      if (keep_case)
        return item
      else
        return _.lowerCase(item)
    },
    generate_all() {
      let given_name
      if (_.random()) { // Returns either 0 or 1
        given_name = this.select_random_item(names.male, true)
      } else {
        given_name = this.select_random_item(names.female, true)
      }
      this.name = given_name + ' ' + this.select_random_item(names.surnames, true)

      this.background = this.select_random_item(backgrounds)
      this.physique = this.select_random_item(traits.physique)
      this.skin = this.select_random_item(traits.skin)
      this.hair = this.select_random_item(traits.hair)
      this.face = this.select_random_item(traits.face)
      this.speech = this.select_random_item(traits.speech)
      this.clothing = this.select_random_item(traits.clothing)
      this.virtue = this.select_random_item(traits.virtue)
      this.vice = this.select_random_item(traits.vice)
      this.reputation = this.select_random_item(traits.reputation)
      this.misfortune = this.select_random_item(traits.misfortune)
    },
  },
}
</script>
