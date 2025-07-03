import './style.css';
import { Logo } from '../logo/index.js';

export function Header() {
  return (
    <view className="header-container">
      <Logo />
      
      <view className="btn-scan">
        <text className="scan-text">Scan</text>
      </view>
    </view>
  );
}
