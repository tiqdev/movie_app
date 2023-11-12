const ErrorText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center w-full mx-auto z-10 gap-2 bg-m_red p-2 rounded-md">
      <h1 className="font-medium text-lg text-white">{text}</h1>
    </div>
  );
};

export default ErrorText;
