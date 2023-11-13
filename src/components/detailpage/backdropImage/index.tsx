import { originalImageUrl } from "../../../utils/constants";

interface BackdropImageProps {
  backdrop_path: string;
}

const BackdropImage = ({ backdrop_path }: BackdropImageProps) => {
  return (
    <div className="absolute inset-0 z-10 bg-m_black h-full overflow-hidden flex justify-start">
      {backdrop_path !== null && (
        <img
          src={originalImageUrl + backdrop_path}
          className="w-full h-full object-cover filter opacity-10 place-content-start"
          alt=""
        />
      )}
    </div>
  );
};

export default BackdropImage;
