
export default {
  name: 'section',
  props: {
    name: {
      type: String
    },
    data: {
      type: Object
    }
  },
  render(h) {
    const dragMobileScreenOpts = {
      sort: true,
      group: {
        name: 'sections',
        put: true,
        pull: false,
      }
    }
    return h('draggable', {
      'class': {
        'section-list': true
      },
      'props': {
        options: dragMobileScreenOpts
      }
    }, this.value.map(function(item) {
      return h(item.component || 'div', {
        ref: item._id,
        attrs: {
          id: item._id,
          class: {
            'section-component': true
          }
        },
        props: {
          setting: item.data
        }})
    }))
  }
}
