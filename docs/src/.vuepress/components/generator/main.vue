<template>
  <div>
    <h2>Traits</h2>
    <div>Your name is {{ name }}. You are {{ age }} years old.</div>

    <h3>Background</h3>
    <div>You were formerly {{ prepend_a_or_an(background) }}.</div>
    <div>You have had the misfortune of being {{ misfortune }}.</div>

    <h3>Looks</h3>
    <div>You have {{ prepend_a_or_an(physique) }} physique, with {{ skin }} skin and a {{ face }} face.</div>
    <div>Your clothing is {{ clothing }}, and your hair is {{ hair }}.</div>

    <h3>Personality</h3>
    You speak in a {{ speech }} manner. You are {{ vice }}, yet {{ virtue }}. People think you are {{ reputation }}.

    <h2>Attributes</h2>
    <div>HP: {{ hp }}</div>
    <div>STR: {{ str }}</div>
    <div>DEX: {{ dex }}</div>
    <div>WIL: {{ wil }}</div>
    
    <h2>Equipment</h2>
    <div>Armor: {{ armor }}</div>
    <div>Helmet/Shield?: {{ helmet_shield }}</div>
    <div>Weapon: {{ weapon }}</div>
    <div>Gear, tools, trinkets: {{ gear }}, {{ tool }}, {{ trinket }} (light)</div>
    <div>Bonus item: {{ bonus }}</div>
    <div>Starting supplies: {{ gold }}g, a torch, 3 rations (each light)</div>

    <h2>Supernatural</h2>
    <div>Gift: {{ gift }}</div>
    <div>Mutation: {{ mutation }}</div>


    <button @click="generate_all()">Reroll all</button>
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
      age: 0,
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
      hp: 0,
      str: 0,
      dex: 0,
      wil: 0,
      armor: '',
      helmet_shield: '',
      weapon: '',
      gear: '',
      tool: '',
      trinket: '',
      bonus: '',
      gold: 0,
      gift: '',
      mutation: ''
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
      this.age = _.random(1, 10) + _.random(1, 10) + 10

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

      this.hp = _.random(1, 6)
      this.str = this.roll_3d6()
      this.dex = this.roll_3d6()
      this.wil = this.roll_3d6()

      this.armor = this.select_random_item(items.armor, true)
      this.helmet_shield = this.select_random_item(items.helmets_shields, true)
      this.weapon = this.select_random_item(items.weapons, true)
      this.gear = this.select_random_item(items.gear, true)
      this.tool = this.select_random_item(items.tools, true)
      this.trinket = this.select_random_item(items.trinkets, true)

      const bonus_category = this.select_random_item(items.bonus)
      switch(bonus_category) {
        case "trinket":
          this.bonus = this.select_random_item(items.trinkets, true)
          break
        case "tool":
          this.bonus = this.select_random_item(items.tools, true)
          break
        case "expeditionary gear":
          this.bonus = this.select_random_item(items.gear, true)
          break
        case "weapon":
          this.bonus = "A weapon; " + this.select_random_item(items.weapons, true)
          break
        case "wand":
          this.bonus = "Wand of " + this.select_random_item(wands, true)
          break
      }

      this.gold = this.roll_3d6()

      if ((this.str + this.dex + this.wil) > 30) {
        this.gift = "None"
        this.mutation = "None"
      } else {
        // Supernatural gift & mutation
        const lowest_score = _.min([this.str, this.dex, this.wil])
        const hp_index = this.hp - 1
        switch(lowest_score) {
          case 3:
          case 4:
            this.gift = gifts._3_4[hp_index]
            break
          case 5:
            this.gift = gifts._5[hp_index]
            break
          case 6:
            this.gift = gifts._6[hp_index]
            break
          case 7:
            this.gift = gifts._7[hp_index]
            break
          case 8:
            this.gift = gifts._8[hp_index]
            break
          case 9:
          case 10:
            this.gift = gifts._9_10[hp_index]
            break
        }

        this.mutation = this.select_random_item(mutations.type, true) + " " + this.select_random_item(mutations.parts, true)
      }
    },
    prepend_a_or_an(word) {
      let prepend = "a"
      // Returns 'an' if input word starts with a vowel, and 'a' otherwise.
      if (_.includes("aeiou", word[0]))
        prepend = "an"
      return prepend + " " + word
    },
    roll_3d6() {
      return _.random(1, 6) + _.random(1, 6) + _.random(1, 6)
    },
  },
}
</script>
