package com.lynx.modules;

import android.app.Activity;
import android.content.Intent;

import com.lynx.react.bridge.Callback;
import com.lynx.react.bridge.JavaOnlyMap;
import com.lynx.react.bridge.Module;
import com.lynx.react.bridge.annotation.LynxModule;
import com.lynx.react.bridge.annotation.Method;

@LynxModule(name = "BarcodeScannerModule")
public class BarcodeScannerModule extends Module {
    private Callback callback;

    @Method
    public void startScan(JavaOnlyMap params, Callback cb) {
        this.callback = cb;
        Activity activity = getCurrentActivity();
        if (activity == null) {
            cb.invoke(null);
            return;
        }

        Intent intent = new Intent(activity, ScannerActivity.class);
        activity.startActivityForResult(intent, 1001);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 1001 && resultCode == Activity.RESULT_OK) {
            String code = data.getStringExtra("scanned_code");

            JavaOnlyMap result = new JavaOnlyMap();
            result.put("code", code);
            callback.invoke(result);
        } else {
            callback.invoke(null);
        }
    }
}
