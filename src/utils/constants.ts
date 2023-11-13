export const originalImageUrl = "https://image.tmdb.org/t/p/original";
export const w500ImageUrl = "https://image.tmdb.org/t/p/w500";
export const w1280ImageUrl = "https://image.tmdb.org/t/p/w1280";
export const w780ImageUrl = "https://image.tmdb.org/t/p/w780";

export const _token = process.env.TMDB_API_TOKEN;

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "tiqdevmovie.firebaseapp.com",
  projectId: "tiqdevmovie",
  storageBucket: "tiqdevmovie.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
