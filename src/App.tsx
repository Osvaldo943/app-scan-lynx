import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useNavigate } from 'react-router'

import './App.css'
import { AppRouter } from './route.js';

export function App(props: {
  onMounted?: () => void
}) {
  const nav = useNavigate();

  return (
    <AppRouter />
  )
}
 