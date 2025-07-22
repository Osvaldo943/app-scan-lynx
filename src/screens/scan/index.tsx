import { useState } from "react";
import { Header } from "../../components/header/index.js"
import product1 from '../../assets/product-4.png'
import  BarcodeScanner  from "../../components/scan/index.js";
import "./style.css"

export function Scan() {
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState<string | null> (null)

  const handleNameChange = (e: any) => {
    setUserName(e); 
  };

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return(
      <view className="camera-container-not-supported">
        <Header />
        <text >Câmera não suportada</text>
      </view>
    )
  }
  
  return (
    <>
      <Header />
      <text>Leitor de Códigos (ZXing)</text>
      {code && <text>Resultado:{code} </text>}
      <BarcodeScanner onResult={setCode} />
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

/*
import React, { useState, useEffect } from 'react';

export const Scan = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const result = await NativeModules.BarcodeScannerModule.sayHello('Desenvolvedor');
        setGreeting(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <view>
      <text>{greeting}</text>
    </view>
  );
};

*/