import BackdropImage from "../../components/searchpage/backdropImage";
import SearchContainer from "../../components/searchpage/searchContainer";
import { useDiscoveredMovie } from "../../stores/movie/hooks";

const SearchPage = () => {
  const discoveredMovie = useDiscoveredMovie();

  return (
    <div className="relative mb-8 flex h-full">
      <BackdropImage
        image={discoveredMovie?.backdrop_path}
        title={discoveredMovie?.title}
      />

      <SearchContainer />
    </div>
  );
};

export default SearchPage;
