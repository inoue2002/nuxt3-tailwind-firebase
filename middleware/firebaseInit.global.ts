import { initializeApp } from 'firebase/app';

export default defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  if (!config.public.FIREBASE_API_KEY) {
    throw new Error('FIREBASE_API_KEY is undefined');
  }
  if (!config.public.FIREBASE_AUTH_DOMAIN) {
    throw new Error('FIREBASE_AUTH_DOMAIN is undefined');
  }
  if (!config.public.FIREBASE_PROJECT_ID) {
    throw new Error('FIREBASE_PROJECT_ID is undefined');
  }
  if (!config.public.FIREBASE_STORAGE_BUCKET) {
    throw new Error('FIREBASE_STORAGE_BUCKET is undefined');
  }
  if (!config.public.FIREBASE_MESSAGING_SENDER_ID) {
    throw new Error('FIREBASE_MESSAGING_SENDER_ID is undefined');
  }
  if (!config.public.FIREBASE_APP_ID) {
    throw new Error('FIREBASE_APP_ID is undefined');
  }

  initializeApp({
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    projectId: config.public.FIREBASE_PROJECT_ID,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID,
  });

  //   if (process.env.NODE_ENV === "development") {
  //     // 開発時はlocalhostを参照する
  //     const functions = getFunctions(getApp());
  //     connectFunctionsEmulator(functions, "localhost", 5002);
  //   }
});
