import { root } from '@lynx-js/react';

import { MemoryRouter, Routes, Route } from 'react-router';

import { Home } from './screens/home/index.js';
import {ProductDetail} from './screens/productDetail/index.js';
import { Scan } from './screens/scan/index.js';
import { Header } from './components/header/index.js';
import { ProductComparison } from './screens/productComparison/index.js';

export function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/scan' element={<Scan/>} />
        <Route path='/productDetail' element={<ProductDetail/>} />
        <Route path='/productComparison' element={<ProductComparison/>}/>
      </Routes>
    </MemoryRouter>
  )
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}