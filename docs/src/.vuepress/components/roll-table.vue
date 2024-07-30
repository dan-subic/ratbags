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
      transpose: {
        type: Boolean,
      },
    },
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    },
    computed: {
      rows() {
        const row_num = this.content.length / this.cols
        let rows = []
        for (let row = 0; row < row_num; row++) {
          let row_content = []
          for (let col = 0; col < this.cols; col++) {
            // Below only works for non-transposed case
            row_content.push(this.content[(row * this.cols) + col])
          }
          rows.push(row_content)
        }
        return rows
      },
    },
  }
  </script>
  