import { Timestamp } from "firebase/firestore";

interface Props {
  displayName: string;
  photoUrl: string;
  date: Timestamp;
  review: string;
}

const ReviewItem = ({ displayName, photoUrl, date, review }: Props) => {
  return (
    <div className="flex flex-col max-w-[600px] w-full md:min-w-[600px]  z-10 gap-4 bg-black p-4 rounded-[22px]">
      <div className="flex flex-row gap-3 items-start justify-start">
        <img
          src={photoUrl}
          className="w-14 h-14 rounded-[8px]"
          alt={displayName}
        />
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <h2 className="text-[18px] font-medium text-m_yellow">
            {displayName}
          </h2>
          <h3 className="text-[12px] font-light text-white italic">
            {date.toDate().toLocaleDateString()}
          </h3>
        </div>
      </div>

      <span className="font-light text-[14px] text-gray-50">{review}</span>
    </div>
  );
};

export default ReviewItem;
