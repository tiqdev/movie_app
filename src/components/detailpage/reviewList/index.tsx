import { useReviews } from "../../../stores/movie/hooks";
import ReviewItem from "../reviewItem";

const ReviewList = () => {
  const reviews = useReviews();
  return (
    <div className="flex flex-wrap gap-5">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.reviewId} />
      ))}
    </div>
  );
};

export default ReviewList;
