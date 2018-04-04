import BootStrap from 'vue-spa-boot'

async function boot() {
  const bootstrap = new BootStrap({
    rootApp: () => import('./App'),
    modules: [() => import(/* webpackChunkName: "app-modules" */'../src/module')],
    servers: {
      website: {
        baseURL: 'http://localhost:3000'
      },
      theme: {
        baseURL: 'http://localhost:3000'
      },
      page: {
        baseURL: 'http://localhost:3000'
      }
    },
    started: function(vm) {
      vm.$router.replace('/site/builder')
    }
  })
  await bootstrap.startUp()
}

boot()
