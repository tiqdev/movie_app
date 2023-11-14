import { Genre } from "../../../models/MovieDetail";
import { useMovieDetail } from "../../../stores/movie/hooks";
import { toHoursAndMinutes } from "../../../utils/functions";
import Title from "../../common/title";
import FavoriteStar from "../favoriteStar";
import GenresList from "../genresList";
import SuggestionsForm from "../suggestionContainer";

interface MovieInfoProps {
  title: string;
  release_date: string;
  genres: Genre[];
  runtime: number;
  vote_average: number;
  overview: string;
}

const MovieInfo = ({
  title,
  release_date,
  genres,
  runtime,
  vote_average,
  overview,
}: MovieInfoProps) => {
  return (
    <div className="flex flex-col md:gap-6 gap-4 flex-1 md:items-start items-center justify-center">
      <Title
        title={
          title + (release_date !== "" && ` (${release_date.substring(0, 4)})`)
        }
      />

      <GenresList genres={genres} />

      <div className="flex flex-row gap-4">
        <span>Runtime : {toHoursAndMinutes(runtime)}</span>
        <span>User Score : {vote_average} / 10</span>
      </div>

      <SuggestionsForm title={title} />

      {overview !== "" && (
        <>
          <h2 className="text-xl md:text-2xl font-medium text-center text-m_yellow mt-4">
            Overview
          </h2>
          <span className="text-light md:text-[16px] text-[14px] md:max-w-full max-w-[500px] tracking-wide leading-6 md:text-start text-center">
            {overview}
          </span>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
