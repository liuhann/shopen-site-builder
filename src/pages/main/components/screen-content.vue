<style scoped>
  .screen-content {
    width: 100%;
    flex: 1;
  }
</style>

<template>
  <draggable element="div" class="screen-content" v-model="sections" :options="dragMobileScreenOpts">
    <section-list :sections="sections"></section-list>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import SectionList from '.././../../components/section-list'
export default {
  name: 'screen-content',
  components: {
    draggable,
    'section-list': SectionList
  },
  data() {
    return {
      sections: [],
      dragMobileScreenOpts: {
        sort: true,
        group: {
          name: 'sections',
          put: true,
          pull: false,
        }
      },
    }
  }
}
</script>
