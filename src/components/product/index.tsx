import "./style.css"
import type { IProduct } from "./type.js"
import product1 from '../../assets/product-4.png'

export function Product({ title, description, code, price, shop, image = "" }: IProduct) {
    return (
        <view className="product-container">
            <view className="product-item">
                <text className="text product-shop">{shop}</text>
                <view className="product-image-container">
                    <image src={product1} className="product-image" />
                </view>
                <view className="product-info">
                    <text className="text product-name">{title}</text>
                    <text className="text product-code">{code} </text>
                    <text className="text product-price">{price}Kz</text>
                </view>
            </view>
        </view>
    )
}
