import './style.css';

export function Header() {
  return (
    <view className="header-container">
        <image
          src="./assets/logo.png"
          style={{ width: '100px', height: '60px' }}
          tint-color='#ffffff'
        />

      <text className='text'>Scan</text>
    </view>
  );
}
