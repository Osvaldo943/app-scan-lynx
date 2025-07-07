import { Header } from "../../components/header/index.js"
import product1 from '../../assets/product-4.png'
import './style.css'

export function ProductComparison() {
    return (
        <>
            <Header />
            <view className="screen comparison">
                <view className="product-container">
                    <view className="product-image-container">
                        <image src={product1} className="product-image" />
                    </view>
                    <view className='product-info'>
                        <text className='text product-name'>Arroz Alimo</text>
                        <text className='text product-code'>00000</text>
                        <text className='text product-description'>Este é um produto importante que serve para alimentar o povo angolano</text>
                    </view>
                    <view className='comparison-container'>
                        <text className='text'>Comparação de Produto</text>
                        <view className="comparison-by-shop">
                            <view>
                                <text className='text'>Kero</text>
                                <text className='text'>5000,00kz</text>
                            </view>
                            <view>
                                <text className='text'>Kibabo</text>
                                <text className='text'>4000,00kz</text>
                            </view>
                            <view>
                                <text className='text'>Arreio</text>
                                <text className='text'>3500,00kz</text>
                            </view>
                            <view>
                                <text className='text'>AngoMart</text>
                                <text className='text'>4000,00kz</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </>
    )
}