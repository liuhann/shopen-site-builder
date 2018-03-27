// 这里指定每个页面组件的动态引入方式
// await import 是ES6标准引入方式 表示异步加载模块
// webpack原写法如下
// const UserDetail = async resolve => resolve(await import(/* webpackChunkName: "githuber" */'./page/hello/page.vue'));
// 基于webpack写法如下，注意注释指定的包名， 这不是ES标准
// const SiteBuilder = () => import(/* webpackChunkName: "site-builder" */ './main/page-builder.vue')
// 或者直接引入 这样会直接打包到外层的
// import SiteBuilder from './main/page-builder.vue'
const SiteBuilder = () => import(/* webpackChunkName: "site-builder" */ './main/page-builder.vue')

export {
  SiteBuilder
}
