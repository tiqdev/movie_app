import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./constants";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { Favorite } from "../models/Movie";
import { Review } from "../models/Review";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);

export const convertToFirebaseTimeStamp = (date: Date) => {
  return Timestamp.fromDate(date);
};

export const favoriteMovieCollection = collection(firestore, "favorites");
export const reviewMovieCollection = collection(firestore, "reviews");

export const getFavorites = async (userId: string) => {
  try {
    const myFavListQuery = query(
      favoriteMovieCollection,
      where("userId", "==", userId)
    );
    const snapshot = await getDocs(myFavListQuery);
    const fetchedFavorites: Favorite[] = [];

    snapshot.forEach((doc) => {
      fetchedFavorites.push(doc.data() as Favorite);
    });
    return fetchedFavorites;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addFavorite = async (favorite: Favorite) => {
  try {
    const docRef = await addDoc(favoriteMovieCollection, favorite);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return "";
  }
};

export const removeFavorite = async (favoriteId: string) => {
  try {
    let delete_query = query(
      favoriteMovieCollection,
      where("favoriteId", "==", favoriteId)
    );
    const snapshot = await getDocs(delete_query);
    snapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    return "success";
  } catch (e) {
    console.error("Error deleting document: ", e);
    return "error";
  }
};

export const getReviews = async (movieId: number) => {
  try {
    const movieReviewsQuery = query(
      reviewMovieCollection,
      where("movieId", "==", movieId)
    );
    const snapshot = await getDocs(movieReviewsQuery);
    const fetchedReview: Review[] = [];

    snapshot.forEach((doc) => {
      fetchedReview.push(doc.data() as Review);
    });
    return fetchedReview;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addReview = async (review: Review) => {
  try {
    const docRef = await addDoc(reviewMovieCollection, review);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return "";
  }
};

export const removeReview = async (reviewId: string) => {
  try {
    let delete_query = query(
      reviewMovieCollection,
      where("reviewId", "==", reviewId)
    );
    const snapshot = await getDocs(delete_query);
    snapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref)
        .then((result) => {
          console.log(result);
          return "success";
        })
        .catch((error) => {
          console.log(error);
          return "error";
        });
    });
  } catch (e) {
    console.error("Error deleting document: ", e);
    return "error";
  }
};
