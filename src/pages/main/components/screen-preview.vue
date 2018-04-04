<style scoped>
  .screen-content {
    overflow-y: auto;
  }
</style>

<template>
<draggable element="div" class="screen-content" v-model="sections" :options="dragMobileScreenOpts" :style="screenViewPort">
  <view-section v-for="(section, index) in sections" :name="section.name" :data="section.data" :key="index"></view-section>
</draggable>
</template>

<script>
import draggable from 'vuedraggable'
import ViewSection from './view-section'
export default {
  name: 'screen-preview',
  components: {
    draggable,
    'view-section': ViewSection
  },
  props: {
    loadedSections: {
      type: Array
    },
    screenViewPort: {
      type: Object
    }
  },
  data() {
    return {
      sections: [
      ],
      dragMobileScreenOpts: {
        sort: true,
        group: {
          name: 'sections',
          put: true,
          pull: false,
        }
      },
    }
  },
  methods: {

  }
}
</script>
