import { useReviews } from "../../../stores/movie/hooks";
import ReviewItem from "../reviewItem";

const ReviewList = () => {
  const reviews = useReviews();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.reviewId} />
      ))}
    </div>
  );
};

export default ReviewList;
