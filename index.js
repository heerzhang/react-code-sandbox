import _ from 'lodash'
import { transform } from '@babel/core'
import babelPresetReact from '@babel/preset-react'
import sandboxer from './lib/sandboxer'
import render from './lib/render'

import classproperties from '@babel/plugin-proposal-class-properties'


export default ({ children, imports }) => {
  const { code } = transform(children, {
    presets: [
      babelPresetReact
    ],
    plugins: [
      classproperties,
      sandboxer
    ],
  })

  const importsWithRender = { ...imports, render }

  return new Function(..._.keys(importsWithRender), code)(..._.values(importsWithRender))
}


//not support tsx or ts，It just support js,jsx source code。
//只能使用js,jsx编码的。
//这里不支持TypeScript代码，支持jsx+React的动态编码,需支持@babel/preset-typescript。
