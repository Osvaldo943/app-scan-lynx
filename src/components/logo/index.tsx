import './style.css'
import reactLynxLogo from '../../assets/logo.png'

export function Logo() {
  return (
    <view>
      <image src={reactLynxLogo} className='logo' tint-color='#fff' />
    </view>
  );
}
