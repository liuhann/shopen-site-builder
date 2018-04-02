<style lang="less">
.shopen-site-builder {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: #FAFAFA;
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
      width: 248px;
      box-shadow: 0 2px 30px 0 hsla(0,0%,84%,.5);
      z-index: 4;
      overflow: hidden;
      transition: all .2s ease-in-out;
      ul {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        list-style: none;
        width: 250px;
        margin: 0;
        padding: 0;
        li {
          height: 120px;
          border: 1px solid #eee;
          margin-top: -1px;
          margin-left: -1px;
          overflow: hidden;
          width: 124px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &:hover {
            background-color: #f7f7f7;
          }
          .image-wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100px;
              max-height: 81px;
            }
          }
          .name {
            line-height: 30px;
            height: 30px;
            font-size: 14px;
          }
        }
      }
    }
    main {
      position: absolute;
      left: 250px;
      top:0;
      right: 0px;
      overflow: auto;
      bottom: 0;
      color: #5b6b73;
      font-size: 12px;
      z-index: 4;
      transition: all .2s ease-in-out;
      background: #FAFAFA;
      .screen-viewport {
        background: #fff;
        margin: 20px 40px;
        border: 1px solid #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .outer-bar {
          width: 100%;
          height: 40px;
          background: #000;
        }
      }
    }
  }
}
.screen-content {
  width: 100%;
  flex: 1;
}
</style>

<template>
<div class="shopen-site-builder">
  <div class="head-tools">
    <select v-model="viewPort">
      <option v-for="(value, key) in screens" :value="value" :key="value">{{key}}</option>
    </select>
  </div>
  <div class="screen">
    <aside>
      <span>组件</span>
      <section class="section-list">
        <draggable element="ul" :options="dragSourceOpts" v-model="sections">
          <li v-for="(section, key) in sections" :key="key">
            <div class="image-wrapper">
              <img :src="imageBaseUrl + '/themes/' + theme + '/previews/' + section.preview">
            </div>
            <span class="name">{{section.title}}</span>
          </li>
        </draggable>
      </section>
    </aside>
    <main>
      <div class="screen-viewport" :style="viewPortStyle">
        <div class="outer-bar"></div>
        <link v-for="style in themeStyles" :key="style" :href="imageBaseUrl + '/themes/' + theme + '/styles/' + style" rel="stylesheet">
        <screen-preview ref="viewScreen"></screen-preview>
      </div>
    </main>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import builder from '../../models/builder'
import screens from '../../models/screens'
import draggable from 'vuedraggable'
import ScreenPreview from './components/screen-preview'

export default {
  name: 'page-builder',
  components: {
    draggable,
    'screen-preview': ScreenPreview,
  },
  created() {
    this.loadThemeSections(this.theme)
  },
  data() {
    return {
      imageBaseUrl: this.ctx.servers.theme.options.baseURL,
      theme: 'bonfire',
      viewPort: '360x640',
      screens,
      dragSourceOpts: {
        sort: false,
        dragClass: 'pg-src-dragging',
        group: {
          name: 'sections',
          pull: 'clone',
          put: false,
        }
      },
      sections: [],
      themeStyles: [],
    }
  },
  computed: {
    viewPortStyle() {
      const xys = this.viewPort.split('x')
      return {
        'width': xys[0] + 'px',
        'height': xys[1] + 'px'
      }
    }
  },
  methods: {
    async loadThemeSections(theme) {
      const themePackage = await builder.getThemeSections({theme}, this.ctx)
      for (let section of themePackage.sections) {
        section.tmpl = await builder.loadSectionTemplate({theme, section}, this.ctx)
        Vue.component('so-' + section.name, {
          props: {
            data: {
              type: Object
            }
          },
          template: section.tmpl
        })
        debugger
        console.log(section.tmpl)
        this.sections.push(section)
      }
      this.themeStyles = themePackage.styles
    },
  },
}
</script>
