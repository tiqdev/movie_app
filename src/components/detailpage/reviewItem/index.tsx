import { FaRegTrashAlt } from "react-icons/fa";
import { Review } from "../../../models/Review";
import { removeMovieReview } from "../../../stores/movie/actions";
import { useUser } from "../../../stores/user/hooks";

interface Props {
  review: Review;
}

const ReviewItem = ({ review }: Props) => {
  const user = useUser();

  const handleDelete = (review: Review) => {
    removeMovieReview(review);
  };

  return (
    <div className="flex flex-col max-w-[600px] w-full md:min-w-[600px]  z-10 gap-4 bg-black p-4 rounded-[22px] relative">
      {user.uid === review.userId && (
        <button
          className="absolute top-3 right-3"
          onClick={() => handleDelete(review)}
        >
          <FaRegTrashAlt className="text-m_red" />
        </button>
      )}
      <div className="flex flex-row gap-3 items-start justify-start">
        <img
          src={review.userPhoto}
          className="w-14 h-14 rounded-[8px]"
          alt={review.userDisplayName}
        />
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <h2 className="text-[18px] font-medium text-m_yellow">
            {review.userDisplayName}
          </h2>
          <h3 className="text-[12px] font-light text-white italic">
            {review.date.toDate().toLocaleDateString()}
          </h3>
        </div>
      </div>

      <span className="font-light text-[14px] text-gray-50">
        {review.review}
      </span>
    </div>
  );
};

export default ReviewItem;
