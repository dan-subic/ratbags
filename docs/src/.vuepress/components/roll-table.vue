<template>
  <div>
    <table>
      <tbody>
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
    cols: {
      required: true,
      type: Number,
    },
    content: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    rows() {
      // Initialise table matrix.
      // Has twice as many columns, for the numbers.
      const row_num = this.content.length / this.cols
      const single_row = Array(this.cols * 2)
      const rows_matrix = Array(row_num)
      // Fill matrix.
      _.forEach(rows_matrix, (row, idx) => {
        rows_matrix[idx] = Array.from(single_row)
      })
      

      for (let col = 0; col < this.cols; col++) {
        for (let row = 0; row < row_num; row++) {
          // Fill matrix with indices
          const index = 1 + col + (col * this.cols) + row
          rows_matrix[row][col * 2] = index

          // Fill matrix with content
          rows_matrix[row][col * 2 + 1] = this.content[index - 1]
        }
      }
      return rows_matrix
    },
  },
}
</script>
  