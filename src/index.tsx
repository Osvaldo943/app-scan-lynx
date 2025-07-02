import { root } from '@lynx-js/react';

import { AppRouter } from './route.js';
import { Header } from './components/header/index.js';

root.render(
  <>
    <Header />
    <AppRouter />
  </>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}