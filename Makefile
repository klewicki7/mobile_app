build-release:
	jetify;
	rm -f android/app/src/main/assets/index.android.bundle;
	cd android && ./gradlew clean;
	cd ..
	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res;
	rm -rf android/app/src/main/res/drawable-mdpi/*;
	rm -rf android/app/src/main/res/drawable-hdpi/*;
	rm -rf android/app/src/main/res/drawable-xhdpi/*;
	rm -rf android/app/src/main/res/drawable-xxhdpi/*;
	rm -rf android/app/src/main/res/drawable-xxxhdpi/*;
	rm -rf android/app/src/main/res/raw/*;
	cd android && ./gradlew assembleRelease

build-debug:
	jetify;
	rm -f android/app/src/main/assets/index.android.bundle;
	cd android && ./gradlew clean;
	cd ..
	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res;
	cd android && ./gradlew assembleDebug

build-release-bundle:
	jetify;
	rm -f android/app/src/main/assets/index.android.bundle;
	cd android && ./gradlew clean;
	cd ..
	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res;
	rm -rf android/app/src/main/res/drawable-mdpi/*;
	rm -rf android/app/src/main/res/drawable-hdpi/*;
	rm -rf android/app/src/main/res/drawable-xhdpi/*;
	rm -rf android/app/src/main/res/drawable-xxhdpi/*;
	rm -rf android/app/src/main/res/drawable-xxxhdpi/*;
	rm -rf android/app/src/main/res/raw/*;
	cd android && ./gradlew bundleRelease

build-ios-release:
	rm -f ios/main.jsbundle;
	rm -rf ios/build;
	npm install;
	react-native link;
	npm run build:ios-release;
	cd ios && pod install;
	cd ios && open davipass.aliados.xcworkspace
