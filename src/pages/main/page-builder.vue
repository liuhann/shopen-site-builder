<style scoped lang="less">

</style>

<template>
<div class="shopen-site-builder">
  <div class="page-sections">
  </div>
</div>
</template>
<script>
export default {
  name: 'page-builder',
  data() {
    return {
      // sections in current page
      includeHeader: true,
      includeFooter: true,
      pageSections: [],
    }
  },
}
</script>
