import com.yourprojectname.barcodescanner.BarcodeScannerPackage;

@Override
protected List<ReactPackage> getPackages() {
  @SuppressWarnings("UnnecessaryLocalVariable")
  List<ReactPackage> packages = new PackageList(this).getPackages();

  packages.add(new BarcodeScannerPackage()); 
  return packages;
}