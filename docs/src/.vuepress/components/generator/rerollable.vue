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
    transition color $transitionDuration linear
    cursor pointer

  span:hover
    color $textColor
    transition color $transitionDuration linear
</style>