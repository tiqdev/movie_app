import { useEffect } from "react";
import AnimatePage from "../../components/common/animatePage";
import BackdropImage from "../../components/searchpage/backdropImage";
import SearchBox from "../../components/searchpage/searchBox";
import { resetSearch } from "../../stores/movie/actions";
import { useBackdropImage } from "../../stores/movie/hooks";

const SearchPage = () => {
  const backDropImage = useBackdropImage();

  useEffect(() => {
    resetSearch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative mb-8 flex min-h-full">
      <AnimatePage>
        <BackdropImage image={backDropImage} />

        <div className="absolute flex flex-col items-center justify-center w-full mx-auto text-center text-white z-10 gap-4 top-[30%] md:top-[30%] pb-[100px]">
          <SearchBox />
        </div>
      </AnimatePage>
    </div>
  );
};

export default SearchPage;
