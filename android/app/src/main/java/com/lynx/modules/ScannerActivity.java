Intent resultIntent = new Intent();
resultIntent.putExtra("scanned_code", codigo);
setResult(Activity.RESULT_OK, resultIntent);
finish();
