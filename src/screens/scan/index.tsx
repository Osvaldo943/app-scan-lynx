declare global {
  interface Window {
    nativeBridge?: {
      call: (
        moduleName: string,
        methodName: string,
        params: Record<string, any>,
        callback: (res: any) => void
      ) => void;
    };
  }
}

export function Scan() {
  const startScan = () => {
    try {
      if (
        typeof window !== 'undefined' &&
        typeof window.nativeBridge?.call === 'function'
      ) {
        window.nativeBridge.call(
          'BarcodeScannerModule',
          'startScan',
          {},
          (result: any) => {
            if (result?.code) {
              alert(`Código escaneado: ${result.code}`);
            } else {
              alert('Nenhum código detectado.');
            }
          }
        );
      } else {
        console.warn('window.nativeBridge.call não disponível.');
        alert('Este ambiente não suporta scanner nativo.');
      }
    } catch (e) {
      console.error('Erro ao chamar scanner nativo:', e);
      alert('Erro ao iniciar scanner.');
    }
  };

  return (
    <view style={{ padding: 20 }}>
      <text bindtap={startScan}>Iniciar Scanner</text>
    </view>
  );
}
