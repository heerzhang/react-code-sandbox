import _ from 'lodash'
import { transform } from '@babel/core'
import babelPresetReact from '@babel/preset-react'
import babelPresetTypescript from '@babel/preset-typescript'
import sandboxer from './lib/sandboxer'
import render from './lib/render'


export default ({ children, imports }) => {
  const { code } = transform(children, {
    presets: [
      babelPresetReact,
      babelPresetTypescript
    ],
    plugins: [
      sandboxer,
    ],
  })

  const importsWithRender = { ...imports, render }

  return new Function(..._.keys(importsWithRender), code)(..._.values(importsWithRender))
}
