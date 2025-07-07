import './style.css';
import { Logo } from '../logo/index.js';
import {useNavigate} from 'react-router';

export function Header() {
  const nav = useNavigate();
  return (
    <view className="header-container">
      <Logo />
       
      <view className="btn-scan">
        <text bindtap={() => nav('/scan')} className="scan-text">Scan</text>
      </view>
    </view>
  );
}
