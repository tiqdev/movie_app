const ReviewTextArea = () => {
  return (
    <div className="flex flex-col max-w-[1280px] w-full z-10 gap-4 bg-black p-4 rounded-[22px]">
      {/* create review with textarea  */}
      <textarea
        className="w-full h-[100px] bg-transparent border border-white rounded-[8px] p-2 text-white"
        placeholder="Write your review"
      />
      <div className="flex flex-row items-center justify-end">
        <button className="bg-m_yellow text-m_black font-bold rounded-[8px] px-4 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewTextArea;
