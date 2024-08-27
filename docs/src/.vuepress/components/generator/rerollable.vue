<template>
  <span>
    <span @click="$emit('click')">{{ str }}</span>
  </span>
</template>

<script>

export default {
  props: {
    str: {
      required: true,
      type: String | Number,
    },
  },
}
</script>

<style lang="stylus" scoped>
  span 
    color $borderColor
    cursor pointer
</style>