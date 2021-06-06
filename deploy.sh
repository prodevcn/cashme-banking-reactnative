#!/bin/sh

# Firebase refresh token
if [ -z $1 ]; then
  echo "Token is required"
  exit
fi

$token=$1

# Depoyment release notes
if [ -z $2 ]; then
  notes="New release"
else
  notes=$2
fi

# Increment the build version and tag
npm version patch
git push
tag=$(git tag --points-at HEAD)
git push origin "$tag"

# Build apk
cd android
./gradlew assembleRelease
cd ..

# Deploy to firebase
firebase appdistribution:distribute ./android/app/build/outputs/apk/debug/app-debug.apk --app 1:499319607140:android:4af9e25d9e26fc8e58b471  --release-notes $notes --testers-file "./testers.txt" --token $token