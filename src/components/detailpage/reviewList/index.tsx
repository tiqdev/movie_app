import ReviewItem from "../reviewItem";

const ReviewList = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <ReviewItem
        displayName="Tarık KAYA"
        photoUrl="https://secure.gravatar.com/avatar/91ae3af7e82acd51e9cb275bb6c8a777.jpg?s=56"
        review="lorem ipsum"
        date="25/10/2023"
      />
    </div>
  );
};

export default ReviewList;
