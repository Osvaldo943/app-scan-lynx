declare let NativeModules : {
  BarcodeScannerModule: {
    sayHello(name: string): Promise<string>;
  }/*
  BarcodeScannerModule: {
    startScan(): void
  },*/
}