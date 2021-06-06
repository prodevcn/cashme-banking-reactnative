# GlobalCredit Mobile

## Dev env setup
1. Fllow the steps here (IMPORTANT: for android make sure to use java8)
https://reactnative.dev/docs/environment-setup

## Run existing project

# Android
1. cp .env.example .env
2. yarn install
3. Set API_URL in .env to your local server ip
4. yarn run android

# iOS
1. cp .env.example .env
2. yarn install
3. Set API_URL in .env to your local server ip
4. Open the project in xcode and run from there

## APK deployment
1. keytool -genkey -v -keystore pallaton-dev.keystore -alias pallaton_dev -keyalg RSA -keysize 2048 -validity 30
2. set password ```android```
3. Make sure android/gradle.properties has the following:
- MYAPP_UPLOAD_STORE_FILE=pallaton-dev.keystore
- MYAPP_UPLOAD_KEY_ALIAS=pallaton_dev
- MYAPP_UPLOAD_STORE_PASSWORD=android
- MYAPP_UPLOAD_KEY_PASSWORD=android
4. Install firebase CLI (https://firebase.google.com/docs/cli)
5. Run `firebase login:ci` command and copy the token (if new token is needed)
6. Create testers.txt in the same directory as deploys.sh with comma separated list of testers(e.g. haykp@aobyte.com,vemir@aobyte.com)
7. Run ./deploy.sh 1//09L-KIliNNiANCgYIARAAGAkSNgF-L9IrjP0pTXw_zNVIf5qu2WfMJ8YmBqRMCMyRRW_Kip4UBeVHL7zfQNhHRTVOk_MqBSimcQ "Some release note"
