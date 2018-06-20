<template>
  <div class="virtual" :style="{minHeight:fullHeight+'px'}"></div>
</template>

<script>
export default {
  name: 'virtual',
  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  }
}
</script>

<style scoped>

</style>
