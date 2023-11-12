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
import { searchMovie, setSearchQuery } from "../../stores/movie/actions";
import SearchInput from "../../components/searchpage/searchInput";
import AnimatePage from "../../components/common/animatePage";
import Loading from "../../components/common/loading";
import useInfiniteScroll from "react-infinite-scroll-hook";
import ScrollToTop from "../../components/common/scrollToTop";

const ListPage = () => {
  const { q } = useParams<{ q: string }>();

  const searchedMovies = useSearchedMovies();
  const isLoading = useIsLoading();
  const searchQuery = useSearchQuery();
  const page = usePage();
  const totalResults = useTotalResults();
  const totalPages = useTotalPages();

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: page <= totalPages,
    onLoadMore: () => {
      searchMovie({ query: searchQuery, page: page });
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    if (searchedMovies.length === 0 && q !== "" && q !== undefined) {
      searchMovie({ query: q, page: 1 });
      setSearchQuery(q);
    }
  }, [q]);

  return (
    <AnimatePage>
      <div className="mt-[80px] flex flex-col items-start justify-start gap-4 w-full max-w-[1280px] mx-auto px-4 relative">
        <ScrollToTop />
        <div className="w-full flex md:flex-row flex-col md:mt-[80px] mt-[40px] justify-between items-center">
          <h1 className="text-xl md:text-2xl font-normal text-center text-white">
            Results for{" "}
            <span className="font-bold text-m_yellow">
              {searchQuery !== "" ? searchQuery : q}
            </span>
          </h1>
          <div className="w-full max-w-[500px]">
            <SearchInput />
          </div>
        </div>

        <div className="flex flex-col gap-4 my-5 mb-[100px] md:mt-[50px] mt-[20px] w-full">
          {searchedMovies?.map((movie: Movie, index: number) => (
            <SearchListItem movie={movie} key={index} />
          ))}

          {totalResults === searchedMovies.length && (
            <div className="text-white text-center">No more results</div>
          )}

          {(isLoading || page <= totalPages) && (
            <div ref={sentryRef}>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </AnimatePage>
  );
};

export default ListPage;
