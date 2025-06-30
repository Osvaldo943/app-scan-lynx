import { root } from '@lynx-js/react'

import { AppRouter } from './route.js'

root.render(<AppRouter />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
