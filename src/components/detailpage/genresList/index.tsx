import { Genre } from "../../../models/MovieDetail";
import { useMovieDetail } from "../../../stores/movie/hooks";
import Badge from "../../common/badge";

const GenresList = () => {
  const movieDetail = useMovieDetail();

  return (
    <div className="flex flex-row flex-wrap md:justify-start justify-center gap-3">
      {movieDetail?.genres.map((genre: Genre) => (
        <Badge title={genre.name} key={genre.id} />
      ))}
    </div>
  );
};

export default GenresList;
