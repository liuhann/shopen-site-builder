import {SiteBuilder} from './pages/page'
import * as builderModel from './models/builder'

const routes = [{
  path: '/site/builder',
  component: SiteBuilder
}]

export default {
  routes,
  models: [builderModel]
}
