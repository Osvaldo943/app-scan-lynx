// src/components/BarcodeScanner.tsx
import React, { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Result } from '@zxing/library';

interface BarcodeScannerProps {
  onResult: (text: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onResult }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader>();

  useEffect(() => {
    const codeReader: any = new BrowserMultiFormatReader();
    codeReaderRef.current = codeReader;

    codeReader
      .decodeFromVideoDevice(
        undefined,
        videoRef.current!,
        (result: Result | undefined, error: any) => {
          if (result) {
            onResult(result.getText());
          }
        }
      )
      .catch((err: any) => console.error('Erro ao iniciar leitura:', err));

    return () => {
      codeReader?.stopContinuousDecode();
    };
  }, [onResult]);

  return (
    <view>
      <video
        ref={videoRef}
        style={{ width: '100%', maxHeight: '400px', borderRadius: '12px' }}
      />
    </view>
  );
};

export default BarcodeScanner;
