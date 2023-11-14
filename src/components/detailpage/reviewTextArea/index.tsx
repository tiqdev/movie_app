import { toast } from "sonner";
import {
  addMovieReview,
  setReviewTextArea,
} from "../../../stores/movie/actions";
import { useMovieDetail, useReviewTextArea } from "../../../stores/movie/hooks";
import { useUser } from "../../../stores/user/hooks";
import { convertToFirebaseTimeStamp } from "../../../utils/firebaseFunctions";

const ReviewTextArea = () => {
  const textArea = useReviewTextArea();
  const user = useUser();
  const movieDetail = useMovieDetail();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.email && movieDetail?.id) {
      if (textArea !== "") {
        let review = {
          reviewId: movieDetail?.id + user.uid + new Date().toISOString(),
          review: textArea,
          userDisplayName: user.displayName,
          userPhoto: user.photoUrl,
          date: convertToFirebaseTimeStamp(new Date()),
          userId: user.uid,
          movieId: movieDetail?.id,
        };

        try {
          addMovieReview(review);
          setReviewTextArea("");
        } catch (error) {
          toast.error("Something went wrong!");
        }
      } else {
        toast.error("Please write a review!");
      }
    } else {
      toast.error("Please login to write a review!");
    }
  };

  return (
    <form
      className="flex flex-col max-w-[1280px] w-full z-10 gap-4 bg-black p-4 rounded-[22px]"
      onSubmit={handleSubmit}
    >
      {/* create review with textarea  */}
      <textarea
        className="w-full h-[100px] bg-transparent border border-white rounded-[8px] p-2 text-white"
        placeholder="Write your review"
        value={textArea}
        onChange={(e) => {
          setReviewTextArea(e.target.value);
        }}
      />
      <div className="flex flex-row items-center justify-end">
        <button
          type="submit"
          className="bg-m_yellow text-m_black font-bold rounded-[8px] px-4 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewTextArea;
