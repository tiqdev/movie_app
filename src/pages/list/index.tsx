import { useParams } from "react-router";
import SearchListItem from "../../components/searchpage/searchListItem";
import { Movie } from "../../models/Movie";
import {
  useIsLoading,
  usePage,
  useSearchQuery,
  useSearchedMovies,
  useTotalPages,
  useTotalResults,
} from "../../stores/movie/hooks";
import { useEffect } from "react";
import {
  searchMovie,
  setPage,
  setSearchQuery,
  setSearchedMovies,
} from "../../stores/movie/actions";
import SearchInput from "../../components/searchpage/searchInput";
import AnimatePage from "../../components/common/animatePage";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/common/loading";

const ListPage = () => {
  const { q } = useParams<{ q: string }>();

  const searchedMovies = useSearchedMovies();
  const searchQuery = useSearchQuery();
  const page = usePage();
  const totalResults = useTotalResults();
  const totalPages = useTotalPages();

  useEffect(() => {
    if (searchedMovies.length === 0 && q !== "" && q !== undefined) {
      searchMovie({ query: q, page: 1 });
      setSearchQuery(q);
    }
  }, [q]);

  const handleNextPage = () => {
    searchMovie({ query: searchQuery, page: page });
  };

  return (
    <AnimatePage>
      <InfiniteScroll
        className="w-full relative"
        dataLength={totalResults}
        next={handleNextPage}
        hasMore={page < totalPages}
        loader={<p>Loading</p>}
        endMessage={
          <p className="h-36 absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-4">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="mt-[80px] flex flex-col items-start justify-start gap-4 w-full max-w-[1280px] mx-auto px-4">
          <div className="w-full flex md:flex-row flex-col mt-[80px] justify-between items-center">
            <h1 className="text-xl md:text-2xl font-normal text-center text-white">
              Results for{" "}
              <span className="font-bold text-m_yellow">
                {searchQuery !== "" ? searchQuery : q}
              </span>
            </h1>
            <div className="w-full max-w-[640px]">
              <SearchInput />
            </div>
          </div>

          <div className="flex flex-col gap-4 my-5 mb-[200px]">
            {searchedMovies?.map((movie: Movie, index: number) => (
              <SearchListItem movie={movie} key={index} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </AnimatePage>
  );
};

export default ListPage;
