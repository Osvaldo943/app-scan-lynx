import { useNavigate } from 'react-router';
import { Header } from '../../components/header.js';

export function Home() {
  const nav = useNavigate();

  return (
    <view>
      <text bindtap={() => nav('/productDetail')}>
        Ir para detalhes do produto
      </text>
    </view>
  );
}
