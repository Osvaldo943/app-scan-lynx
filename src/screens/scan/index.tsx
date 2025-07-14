import { useEffect } from "@lynx-js/react";

export function Scan() {
  const handleScan = () => {
    NativeModules.BarcodeScannerModule.startScan();
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#2196F3",
    borderRadius: "6px",
    textAlign: "center",
  };

  const textStyle = {
    color: "#fff",
    fontSize: "18px",
  };

  return (
    <view style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <view bindtap={handleScan}>
        <text style={textStyle}>Escanear Código de Barras</text>
      </view>
    </view>
  );
}

/*import { useEffect, useState } from "react";
import { Header } from "../../components/header/index.js"
import product1 from '../../assets/product-4.png'
import "./style.css"
import { BarcodeScanner } from "../../components/scan/index.js";

export function Scan() {
  const [userName, setUserName] = useState('');

  const handleNameChange = (e: any) => {
    setUserName(e); 
  };
  return (
    <>
      <Header />
      <BarcodeScanner />
      <view className="screen scan">
        <view className="product-image-container">
          <image src={product1} className="product-image" />
        </view>
        <text>{userName} </text>
        <view className="form">
          <view className="input-container">
            <text className="label">Código</text>
            <input className="input-text" style={{color: '#000'}} placeholder="Código" />
          </view>
          <view className="input-container">
            <text className="label">Nome</text>
            <input className="input-text" style={{color: '#000'}} placeholder="Nome" />
          </view>
          <view className="input-container">
            <text className="label">Preço</text>
            <input className="input-text" style={{color: '#000'}} placeholder="Preço" />
          </view>
          <view className="input-container">
            <text className="label">Descrição</text>
            <input className="input-text" style={{color: '#000'}} placeholder="Descrição" />
          </view> 

          <text className="btn-add-product">Adicionar produto</text>
        </view>
      </view>
    </>
  );
}
*/