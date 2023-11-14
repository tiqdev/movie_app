import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MovieDetail } from "../../../models/MovieDetail";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../../stores/movie/actions";
import { useFavoriteMovies } from "../../../stores/movie/hooks";

interface FavoriteStarProps {
  userId: string;
  movie: MovieDetail;
}

const FavoriteStar = ({ userId, movie }: FavoriteStarProps) => {
  const favoriteMovies = useFavoriteMovies();

  const isFavorite = favoriteMovies.find(
    (favoriteMovie) => favoriteMovie.movieId === movie.id
  );

  const handleFavorite = async () => {
    let favoriteMovie = {
      userId: userId,
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      overview: movie.overview,
      favoriteId: userId + movie.id,
    };

    if (isFavorite) {
      await removeFavoriteMovie(favoriteMovie);
    } else {
      await addFavoriteMovie(favoriteMovie);
    }
  };

  const _class = "w-6 h-6 text-m_yellow cursor-pointer";

  return isFavorite ? (
    <AiFillStar className={_class} onClick={handleFavorite} />
  ) : (
    <AiOutlineStar className={_class} onClick={handleFavorite} />
  );
};

export default FavoriteStar;
