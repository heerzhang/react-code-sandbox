import _ from 'lodash'

export default () => ({
  visitor: {
    Program(path, state) {
      const imports = _.filter(path.get('body'), (p) => p.isImportDeclaration())
      _.each(imports, (i) => i.remove())
    },
    Identifier(path) {
      if (path.node.name !== 'render') return

      path.node.name = 'render'
    },
  },
})

//heerzhang：   path.node.name = 'return render' 改成 'render'
