<template>
  <span>
    <span @click="$emit('click')">{{ str }} <font-awesome-icon icon="fa-solid fa-arrows-rotate"></font-awesome-icon></span>
  </span>
</template>

<script>

export default {
  props: {
    str: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="stylus">


  span 
    color $borderColor
    cursor pointer
</style>