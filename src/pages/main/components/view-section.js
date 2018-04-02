export default {
  name: 'view-section',
  props: {
    name: {
      type: String
    },
    data: {
      type: Object
    }
  },
  render(h) {
    return h('so-' + this.name, {
      props: {
        data: this.data
      }
    }, [])
  }
}
