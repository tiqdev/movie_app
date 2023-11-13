import { useReviews } from "../../../stores/movie/hooks";
import ReviewItem from "../reviewItem";

const ReviewList = () => {
  const reviews = useReviews();
  console.log(reviews);
  return (
    <div className="flex flex-wrap gap-5">
      {reviews.map((review) => (
        <ReviewItem
          key={review.reviewId}
          displayName={review.userDisplayName || ""}
          photoUrl={review.userPhoto}
          review={review.review}
          date={review.date}
        />
      ))}
    </div>
  );
};

export default ReviewList;
