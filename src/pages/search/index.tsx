import BackdropImage from "../../components/searchpage/backdropImage";
import SearchBox from "../../components/searchpage/searchBox";
import { useDiscoveredMovie } from "../../stores/movie/hooks";

const SearchPage = () => {
  const discoveredMovie = useDiscoveredMovie();

  return (
    <div className="relative mb-8 flex h-full">
      <BackdropImage
        image={discoveredMovie?.backdrop_path}
        title={discoveredMovie?.title}
      />

      <div className="absolute flex flex-col items-center justify-center w-full mx-auto text-center text-white z-10 gap-4 top-[40%]">
        <SearchBox />
      </div>
    </div>
  );
};

export default SearchPage;
