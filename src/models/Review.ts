import { Timestamp } from "firebase/firestore";

export interface Review {
  userId: string;
  movieId: number;
  userDisplayName: string;
  userPhoto: string;
  date: Timestamp;
  review: string;
  reviewId: string;
}
