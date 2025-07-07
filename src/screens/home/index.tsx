import { useNavigate } from 'react-router';
import { Header } from '../../components/header/index.js';
import { Product } from '../../components/product/index.js';
import "./style.css"

export function Home() {
  const nav = useNavigate();

  return (
    <>
    <Header />
    <view className="screen">
      <text bindtap={() => nav('/productDetail')}>
        <text className='text'>Produtos</text>
      </text>

        <view scroll-y={true} className='products-container'>
          <Product title='Arroz Alimo' code='000000' shop='Kero' image='assets/logo.png' description='' price={4000} />
          <Product title='Massa Alimo' code='020000' shop='Candando' image='assets/logo.png' description='' price={2000} />
          <Product title='Óleo arroz' code='405200' shop='Fortaleza' image='assets/logo.png' description='' price={6000} />
          <Product title='Arroz Alimo' code='980002' shop='Arreiou' image='assets/logo.png' description='' price={5000} />
        </view>
    </view>
    </>
  );
}
