import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { Home } from './screens/home/index.js';

export function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
