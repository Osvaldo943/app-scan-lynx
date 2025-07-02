import './style.css';

export function Header() {
  return (
    <view className="header-container">
      <image
        src="./assets/logo.png"
        style={{
          width: '100px',
          height: '60px',
          filter: 'brightness(0) invert(1)',
        }}
        tint-color="#ffffff"
      />
      <view className='btn-scan'>
        <text className="text">Scan</text>
      </view>
    </view>
  );
}
