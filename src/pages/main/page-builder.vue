<style scoped lang="less">
.shopen-site-builder {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .head-tools {
    position: relative;
    height: 56px;
    background: #fff;
    box-shadow: 1px 0 6px 0 rgba(39,54,78,.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 105;
  }
  .screen {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    aside {
      position: absolute;
      left: 0;
      top:0;
      bottom: 0;
      color: #5b6b73;
      background: #fff;
      font-size: 12px;
      width: 245px;
      box-shadow: 0 2px 30px 0 hsla(0,0%,84%,.5);
      z-index: 4;
      overflow: hidden;
      transition: all .2s ease-in-out;
      ul {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        list-style: none;
        margin: 0 0 0 2px;
        padding: 0;
        li {
          height: 100px;
          border: 1px solid #eee;
          margin-top: -1px;
          margin-left: -1px;
          overflow: hidden;
          width: 82px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
<div class="shopen-site-builder">
  <div class="head-tools">
  </div>
  <div class="screen">
    <aside>
      <section class="section-list">
        <ul>
          <li v-for="(section, key) in sections" :key="key">
            <div class="image-wrapper">
              <img :src="section.preview">
              <span>{{key}}</span>
            </div>
          </li>
        </ul>
      </section>
    </aside>
    <main></main>
  </div>
</div>
</template>
<script>
import builder from '../../models/builder'
export default {
  name: 'page-builder',
  created() {
    this.loadThemeSections(this.theme)
  },
  data() {
    return {
      theme: 'bonfire',
      sections: [],
      pageSections: [],
    }
  },
  methods: {
    async loadThemeSections(theme) {
      const sections = await builder.getThemeSections({theme}, this.ctx)
      this.sections = sections
    }
  },
}
</script>
