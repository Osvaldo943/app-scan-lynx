import './style.css';

export function Header() {
  return (
    <view className="header-container">
      <view>
        <image
          src="./assets/logo.png"
          style={{ width: '150px', height: '100px' }}
        />
      </view>

      <text>Scan</text>
    </view>
  );
}
