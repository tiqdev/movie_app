import { useEffect } from "react";
import AnimatePage from "../../components/common/animatePage";
import BackdropImage from "../../components/searchpage/backdropImage";
import SearchBox from "../../components/searchpage/searchBox";
import { resetSearch } from "../../stores/movie/actions";
import { useDiscoveredMovie } from "../../stores/movie/hooks";

const SearchPage = () => {
  const discoveredMovie = useDiscoveredMovie();

  useEffect(() => {
    //if localstorage has user data, set user
    resetSearch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative mb-8 flex min-h-full">
      <AnimatePage>
        <BackdropImage image={discoveredMovie?.backdrop_path} />

        <div className="absolute flex flex-col items-center justify-center w-full mx-auto text-center text-white z-10 gap-4 top-[30%] md:top-[30%] pb-[100px]">
          <SearchBox />
        </div>
      </AnimatePage>
    </div>
  );
};

export default SearchPage;
