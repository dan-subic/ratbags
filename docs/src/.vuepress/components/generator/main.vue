<template>
  <div>
    <div class="info">
      <span class="text-span">Click a highlighted trait to reroll it.</span>
      <span class="button-span"><button @click="generate_all()">Reroll all <font-awesome-icon icon="fa-solid fa-arrows-rotate"></font-awesome-icon></button></span>
    </div>
    <h2>Traits</h2>
    <div>Your name is <generator-rerollable :str="name" @click="roll_name()"/>. You are <generator-rerollable :str="age" @click="roll_age()"/> years old.</div>

    <h3>Background</h3>
    <div>You were formerly <generator-rerollable :str="prepend_a_or_an(background)" @click="roll_background()"/>.</div>
    <div>You have had the misfortune of being <generator-rerollable :str="misfortune" @click="roll_misfortune()"/>.</div>

    <h3>Looks</h3>
    <div>You have <generator-rerollable :str="prepend_a_or_an(physique)" @click="roll_physique()"/> physique, with <generator-rerollable :str="skin" @click="roll_skin()"/> skin and a <generator-rerollable :str="face" @click="roll_face()"/> face.</div>
    <div>Your clothing is <generator-rerollable :str="clothing" @click="roll_clothing()"/>, and your hair is <generator-rerollable :str="hair" @click="roll_hair()"/>.</div>

    <h3>Personality</h3>
    You speak in a <generator-rerollable :str="speech" @click="roll_speech()"/> manner.
    You are <generator-rerollable :str="vice" @click="roll_vice()"/>, yet <generator-rerollable :str="virtue" @click="roll_virtue()"/>.
    People think you are <generator-rerollable :str="reputation" @click="roll_reputation()"/>.

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
        return item.toLowerCase()
    },
    generate_all() {
      this.roll_age()
      this.roll_name()

      this.roll_background()
      this.roll_physique()
      this.roll_skin()
      this.roll_hair()
      this.roll_face()
      this.roll_speech()
      this.roll_clothing()
      this.roll_virtue()
      this.roll_vice()
      this.roll_reputation()
      this.roll_misfortune()

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
    roll_name() {
      let given_name
      if (_.random()) { // Returns either 0 or 1
        given_name = this.select_random_item(names.male, true)
      } else {
        given_name = this.select_random_item(names.female, true)
      }
      this.name = given_name + ' ' + this.select_random_item(names.surnames, true)
    },
    roll_age() {
      this.age = _.random(1, 20) + _.random(1, 20) + 10
    },
    roll_background() {
      this.background = this.select_random_item(backgrounds)
    },
    roll_physique() {
      this.physique = this.select_random_item(traits.physique)
    },
    roll_skin() {
      this.skin = this.select_random_item(traits.skin)
    },
    roll_hair() {
      this.hair = this.select_random_item(traits.hair)
    },
    roll_face() {
      this.face = this.select_random_item(traits.face)
    },
    roll_clothing() {
      this.clothing = this.select_random_item(traits.clothing)
    },
    roll_speech() {
      this.speech = this.select_random_item(traits.speech)
    },
    roll_virtue() {
      this.virtue = this.select_random_item(traits.virtue)
    },
    roll_vice() {
      this.vice = this.select_random_item(traits.vice)
    },
    roll_reputation() {
      this.reputation = this.select_random_item(traits.reputation)
    },
    roll_misfortune() {
      this.misfortune = this.select_random_item(traits.misfortune)
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

<style lang="stylus" scoped>


  button 
    padding 0.5rem
    background-color $bgColourAlt;
    color $textColor
    font-size 1rem
    border 2px solid $borderColor
    border-radius 6px
    cursor pointer
    text-align right
    transition background-color $transitionDuration linear
  
  button:hover
    background-color $borderColor
    transition background-color $transitionDuration linear
  
  .text-span
    display flex
    align-items center

  .button-span
    align-self center
    width 100%
    display inlign-block
    text-align right
    flex 1
    

  .info
    background-color $bgColourAlt;
    padding 1rem
    display flex
</style>