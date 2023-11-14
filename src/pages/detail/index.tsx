import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AnimatePage from "../../components/common/animatePage";
import Title from "../../components/common/title";
import BackdropImage from "../../components/detailpage/backdropImage";
import FavoriteStar from "../../components/detailpage/favoriteStar";
import MovieInfo from "../../components/detailpage/movieInfo";
import Poster from "../../components/detailpage/poster";
import ReviewList from "../../components/detailpage/reviewList";
import ReviewTextArea from "../../components/detailpage/reviewTextArea";
import {
  getFavoriteMovies,
  getMovieDetail,
  getMovieReview,
  resetSearch,
} from "../../stores/movie/actions";
import { useIsLoading, useMovieDetail } from "../../stores/movie/hooks";
import { useUser } from "../../stores/user/hooks";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const movieDetail = useMovieDetail();
  const isLoading = useIsLoading();
  const user = useUser();

  useEffect(() => {
    id && getMovieDetail(Number(id));
  }, [id]);

  useEffect(() => {
    resetSearch();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user.email !== "") {
      getFavoriteMovies(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (movieDetail) {
      getMovieReview(movieDetail.id);
    }
  }, [movieDetail]);

  return (
    <AnimatePage>
      <div className="mt-[80px] w-full pb-[40px]">
        {!isLoading && movieDetail?.id === 0 && (
          <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-m_yellow">
              No movie found with this id
            </h1>
            <Link to="/" className="text-white">
              Go back
            </Link>
          </div>
        )}

        {!isLoading && movieDetail && movieDetail?.id !== 0 && (
          <>
            <div className="py-12 relative overflow-hidden">
              <BackdropImage backdrop_path={movieDetail.backdrop_path} />

              <div className="px-4 w-full max-w-[1280px] mx-auto flex md:flex-row flex-col items-center justify-between relative z-20">
                {user.email !== "" && (
                  <div className="absolute top-0 left-[64px]">
                    <FavoriteStar userId={user.uid} movie={movieDetail} />
                  </div>
                )}

                <Poster
                  poster_path={movieDetail.poster_path}
                  title={movieDetail.title ?? ""}
                />

                <MovieInfo
                  title={movieDetail.title}
                  genres={movieDetail.genres}
                  runtime={movieDetail.runtime}
                  release_date={movieDetail.release_date}
                  overview={movieDetail.overview}
                  vote_average={movieDetail.vote_average}
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full max-w-[1280px] px-4 mx-auto pt-10 gap-6">
              <Title title="Reviews" />
              {user.email && <ReviewTextArea />}
              <ReviewList />
            </div>
          </>
        )}
      </div>
    </AnimatePage>
  );
};

export default DetailPage;
