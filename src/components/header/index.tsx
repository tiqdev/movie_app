import GoogleLogin from "./google_login";
import LogoButton from "./logo_button";

const Header = () => {
  return (
    <header>
      <nav className="w-full h-16 bg-m_black flex items-center justify-between">
        <LogoButton />
        <GoogleLogin />
      </nav>
    </header>
  );
};

export default Header;
