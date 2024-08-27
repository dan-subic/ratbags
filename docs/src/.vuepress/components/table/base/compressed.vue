<!-- 
    This component is for tables where not every index has a unique result.
    Expects the content to have duplicate entries (and all duplicates are grouped)
    Horizontal by default but can be flipped veritcal via prop.
-->

<template>
  <div>
    <table>
      <tbody v-bind:class="{ centred: !vertical }">
        <tr v-for="row of rows">
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

export default {
  props: {
    content: {
      required: true,
      type: Array,
    },
    vertical: {
      type: Boolean,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    rows() {
      // Generate the content & the die ranges.
      const content_unique = _.uniq(this.content)
      const counts = _.countBy(this.content)

      let ranges = _.map(content_unique, (result) => {
        const first_instance = _.indexOf(this.content, result) + 1
        let range_str = "" + first_instance
        if (counts[result] !== 1) {
          range_str += "-" + (first_instance + counts[result] - 1)
        }
        return range_str
      })

      const table = [
        ranges,
        content_unique,
      ]

      if (!this.vertical) {
        return table
      } else {
        // Transpose
        return _.map(table[0], (col, colIdx) => _.map(table, (row) => row[colIdx]))
      }
    },
  },
}
</script>

<style lang="css">
  .centred {
    text-align: center;
  }
</style>