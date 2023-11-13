import SearchListItem from "../../components/searchpage/searchListItem";
import { Favorite, Movie } from "../../models/Movie";
import {
  useFavoriteMovies,
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
import Title from "../../components/common/title";
import FavoriteItem from "../../components/favoritespage/favoriteItem";

const FavoritesPage = () => {
  const searchedMovies = useSearchedMovies();

  const favorites = useFavoriteMovies();
  const isLoading = useIsLoading();
  const searchQuery = useSearchQuery();
  const page = usePage();
  const totalResults = useTotalResults();
  const totalPages = useTotalPages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: page <= totalPages,
    onLoadMore: () => {
      searchMovie({ query: searchQuery, page: page });
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <AnimatePage>
      <div className="mt-[80px] flex flex-col items-start justify-start gap-4 w-full max-w-[1280px] mx-auto px-4 relative">
        <ScrollToTop />
        <div className="w-full flex md:flex-row flex-col md:mt-[80px] mt-[40px] justify-between items-center gap-2">
          <Title title="My Favorite Movies" />
        </div>

        <div className="flex flex-col gap-4 my-5 mb-[100px] mt-[20px] w-full">
          {favorites?.map((favorite: Favorite, index: number) => (
            <FavoriteItem favorite={favorite} key={index} />
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default FavoritesPage;
