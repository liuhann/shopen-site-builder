import BootStrap from 'vue-spa-boot'
import App from './App'
import module from '../src/module'

const bootstrap = new BootStrap({
  rootApp: App,
  modules: [module],
  servers: {
    website: {
      baseURL: 'http://localhost:3000'
    }
  }
});

bootstrap.startUp()
