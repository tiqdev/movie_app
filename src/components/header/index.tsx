import { useUser } from "../../stores/user/hooks";
import GoogleLogin from "./google_login";
import LogoButton from "./logo_button";

const Header = () => {
  const user = useUser();

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20  flex bg-overlay_pattern_dark_top z-20">
      <nav className="flex w-full max-w-[1280px] px-4 items-center mx-auto justify-between">
        <LogoButton />

        {!user.email && <GoogleLogin />}

        {user.email && (
          <div className="flex items-center gap-2">
            <img
              src={user.photoUrl}
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-m_yellow text-[14px]">
              {user.displayName}
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
