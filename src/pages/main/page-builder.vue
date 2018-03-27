<style scoped lang="less">
.shopen-site-builder {
  display: flex;
  height: 100%;
  background-color: #f4f6f8;
  .setting-container {
    flex: 1;
  }
  .preview-container {
    flex: 1;
    display: flex;
    justify-content:center;
    .mobile {
      width: 360px;
      height: 720px;
      border: 1px solid #ccc;
      align-items:center;
      background-color: #fff;
      overflow-y: auto;
    }
  }
}
</style>

<template>
<div class="shopen-site-builder">
  <div class="setting-container">
  </div>
  <div class="preview-container">
    <div class="mobile">
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'page-builder',
  created() {
  },
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
