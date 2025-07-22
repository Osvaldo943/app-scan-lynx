package com.yourprojectname.barcodescanner

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class BarcodeScannerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "BarcodeScannerModule"
    }
    @ReactMethod
    fun sayHello(name: String, promise: Promise) {
        try {
            val greeting = "Olá, $name! Bem-vindo ao Módulo Nativo."
            promise.resolve(greeting)
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
}