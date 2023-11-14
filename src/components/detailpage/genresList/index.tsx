import { Genre } from "../../../models/MovieDetail";
import Badge from "../../common/badge";

interface GenresListProps {
  genres: Genre[];
}

const GenresList = ({ genres }: GenresListProps) => {
  return (
    <div className="flex flex-row flex-wrap md:justify-start justify-center gap-3">
      {genres.map((genre: Genre) => (
        <Badge title={genre.name} key={genre.id} />
      ))}
    </div>
  );
};

export default GenresList;
