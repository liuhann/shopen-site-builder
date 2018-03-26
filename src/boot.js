import BootStrap from 'vue-spa-boot'
import App from './App'
import module from './module'

const bootstrap = new BootStrap({
  rootApp: App,
  modules: [module],
  servers: {
    website: {
      baseURL: 'http://localhost:3000'
    }
  },
  beforeStarted: function() {
    // check login or something else
    return true
  },
  started: function() {
    debugger
  }
})

debugger

bootstrap.startUp()
