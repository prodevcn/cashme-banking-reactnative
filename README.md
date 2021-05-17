# GlobalCredit Mobile

## Run existing project

1. cp .env.example .env
2. yarn install
3. Set API_URL in .env to your local server ip
4. expo start

## APK generation
1. keytool -genkey -v -keystore pallaton-dev.keystore -alias pallaton_dev -keyalg RSA -keysize 2048 -validity 30
2. set password ```android```
3. cd android
4. ./gradlew assembleRelease
