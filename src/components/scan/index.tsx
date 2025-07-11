import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export function BarcodeScanner() {
  const scannerRef = useRef<any>(null); // referência ao DOM

  useEffect(() => {
    if (!scannerRef.current) return; // ⚠️ garante que o DOM existe

    const html5QrCode = new Html5Qrcode(scannerRef.current.id);

    html5QrCode.start(
      { facingMode: 'environment' },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText) => {
        console.log("Código lido:", decodedText);
        html5QrCode.stop(); // para após ler
      },
      (error) => {
        // erro comum de leitura, pode ignorar
      }
    );

    return () => {
      html5QrCode.stop().catch(() => {});
    };
  }, []);

  return (
    <view
      id="scanner"
      ref={scannerRef}
      style={{ width: '100%', height: '300px', background: '#000' }}
    ></view>
  );
}

