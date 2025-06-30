import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useNavigate } from 'react-router'

import './App.css'

export function App(props: {
  onMounted?: () => void
}) {
  const nav = useNavigate();

  return (
    <view>
      <text bindtap={()=>nav("/home")}>Navegar para home</text>
    </view>
  )
}
 