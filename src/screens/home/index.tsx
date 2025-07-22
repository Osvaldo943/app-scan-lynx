import { useNavigate } from 'react-router';
import { Header } from '../../components/header/index.js';
import { Product } from '../../components/product/index.js';
import './style.css';

export function Home() {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <view className="screen">
        <text bindtap={() => nav('/productDetail')}>
          <text className="text">Produtos (4)</text>
        </text>

        <scroll-view>
          <view scroll-y={true} className="products-container">
            {Array.from({ length: 6 }).map((item) => (
              <Product
                title="Massa Alimo"
                code="020000"
                shop="Candando"
                image="assets/logo.png"
                description=""
                price={2000}
              />
            ))}
          </view>
        </scroll-view>
      </view>
    </>
  );
}
