import GoogleLogin from "./google_login";
import LogoButton from "./logo_button";

const Header = () => {
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 px-4 flex bg-overlay_pattern_dark_top z-20">
      <nav className="flex w-full max-w-[1280px] items-center mx-auto justify-between">
        <LogoButton />
        <GoogleLogin />
      </nav>
    </header>
  );
};

export default Header;
