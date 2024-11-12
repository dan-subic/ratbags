<template>
  <div class="table-div">
    <table class="table-main">
      <tbody class="table-body">
        <tr class="centred">
          <th>Lowest Ability Score</th>
          <th>1 HP</th>
          <th>2 HP</th>
          <th>3 HP</th>
          <th>4 HP</th>
          <th>5 HP</th>
          <th>6 HP</th>
        </tr>
        <tr v-for="(row, idx) of gifts">
          <td>{{ row_title(idx) }}</td>
          <td v-for="col of row">
            {{ col }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'
import { gifts } from '../../../../.data/gifts.ts'

export default {
  computed: {
    gifts() {
      return gifts
    },
  },
  methods: {
    row_title(id) {
      switch(id) {
        case '_3_4': {
          return "3-4"
        }
        case '_5': {
          return "5"
        }
        case '_6': {
          return "6"
        }
        case '_7': {
          return "7"
        }
        case '_8': {
          return "8"
        }
        case '_9_10': {
          return "9-10"
        }
      }
    },
  },
}
</script>

<style lang="css">
  @media only screen and (min-width: 1440px) {
    /* Centres the Gifts table. Only done on large screens which don't need to horizontally scroll to see the full table. */

    .table-div {
      height: 50rem;
    }
    .table-main {
      overflow: visible;
      position: relative;
      margin: auto;
    }
    .table-body {
      position: absolute;
      top: -100%;
      bottom: -100%;
      left: -100%;
      right: -100%;
      max-width: 70rem;
      margin: auto;
    }
  }

  

  .centred {
    text-align: center;
  }
</style>