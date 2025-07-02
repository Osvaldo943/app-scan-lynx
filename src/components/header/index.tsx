import './style.css';

export function Header() {
  return (
    <view className="header-container">
      <view>
        <image
          src="./assets/logo.png"
          style={{ width: '100px', height: '60px' }}
          tint-color='white'
        />
      </view>

      <text>Scan</text>
    </view>
  );
}
