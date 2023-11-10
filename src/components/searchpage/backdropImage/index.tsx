type BackdropImageProps = {
  image: string | null | undefined;
};

const BackdropImage = ({ image }: BackdropImageProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[100%] z-10 bg-overlay_pattern_dark_bottom opacity-100"></div>
      <div
        className="absolute top-0 left-0 w-full h-[100%] bg-cover bg-no-repeat z-0 opacity-50"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionX: "center",
          backgroundPositionY: "start",
        }}
      ></div>
    </>
  );
};

export default BackdropImage;
