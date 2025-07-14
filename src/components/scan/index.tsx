import { useEffect } from "@lynx-js/react";

export function App() {
  const handleScan = () => {
    NativeModules.BarcodeScannerModule.startScan();
  };

  return (
    <view style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <view style={{
        padding: "12px",
        backgroundColor: "#2196F3",
        borderRadius: "6px"
      }} bindtap={handleScan}>
        <text style={{ color: "#fff", fontSize: "18px" }}>Escanear Código</text>
      </view>
    </view>
  );
}
