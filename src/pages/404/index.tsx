import AnimatePage from "../../components/common/animatePage";

const NotFoundPage = () => {
  return (
    <AnimatePage>
      <div className="w-full absolute top-0 left-0">
        <div className="w-full h-screen flex items-center justify-center">
          <h1>Page Not Found</h1>
        </div>
      </div>
    </AnimatePage>
  );
};

export default NotFoundPage;
