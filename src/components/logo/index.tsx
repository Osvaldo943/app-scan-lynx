import './style.css'
import reactLynxLogo from '../../assets/logo.png'
import {useNavigate} from 'react-router';

export function Logo() {
  const nav = useNavigate();

  return (
    <view bindtap={()=> nav('/')}>
      <image src={reactLynxLogo} className='logo' tint-color='#fff' />
    </view>
  );
}
