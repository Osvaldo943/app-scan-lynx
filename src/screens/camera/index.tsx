import { useRef, useState, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

export  function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState("");
  const reader = useRef(new BrowserMultiFormatReader());

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    reader.current.decodeFromConstraints(
      { audio: false, video: { facingMode: "environment" } },
      v,
      (res, err) => {
        if (res) setResult(res.getText());
        if (err) console.error(err);
      }
    );

    return () => reader.current.reset();
  }, []);

  return (
    <view>
      <video ref={videoRef} style={{ width: "100%", maxWidth: 400 }} />
      <text>Resultado: {result}</text>
    </view>
  );
}
