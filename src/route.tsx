import { root } from '@lynx-js/react';

import { MemoryRouter, Routes, Route } from 'react-router';

import { Home } from './screens/home/index.js';
import {ProductDetail} from './screens/productDetail/index.js'

export function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productDetail' element={<ProductDetail/>} />
      </Routes>
    </MemoryRouter>
  );
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
