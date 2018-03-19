import {SiteBuilder} from './pages/page'
import * as builderModel from './models/website'

const routes = [{
  path: '/admin/builder',
  component: SiteBuilder
}]

export default {
  routes,
  models: [builderModel]
}
