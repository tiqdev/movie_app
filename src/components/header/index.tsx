import { useEffect, useState } from "react";
import { useUser } from "../../stores/user/hooks";
import GoogleLogin from "./google_login";
import LogoButton from "./logo_button";
import { setUser } from "../../stores/user/actions";
import {
  getFavoriteMovies,
  setDropdownIsActive,
} from "../../stores/movie/actions";
import { Link } from "react-router-dom";
import { useDropdownIsActive } from "../../stores/movie/hooks";

const Header = () => {
  const user = useUser();
  const isDropdownActive = useDropdownIsActive();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      getFavoriteMovies(user.uid);
      setUser(user);
    }
  }, []);

  const logout = () => {
    setUser({
      email: "",
      displayName: "",
      photoUrl: "",
      uid: "",
    });
    localStorage.removeItem("user");
  };

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20  flex bg-overlay_pattern_dark_top z-20">
      <nav className="flex w-full max-w-[1280px] px-4 items-center mx-auto justify-between relative">
        <LogoButton />

        {!user.email && <GoogleLogin />}

        {user.email && (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setDropdownIsActive(!isDropdownActive);
            }}
          >
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

        {/* dropdown for favorites and logout */}
        {user.email && isDropdownActive && (
          <div
            className="inline-flex items-center flex-col absolute top-[70px] right-2 bg-m_yellow w-[120px] rounded-lg"
            onClick={() => {
              setDropdownIsActive(!isDropdownActive);
            }}
            onBlur={() => {
              setDropdownIsActive(!isDropdownActive);
            }}
            tabIndex={0}
          >
            <Link
              to="/favorites"
              className="m_black w-full flex justify-center hover:bg-m_black hover:text-m_yellow text-m_black font-medium rounded-t-lg py-2"
            >
              <span className="text-[14px]">Favorites</span>
            </Link>
            <button
              className="m_black w-full flex justify-center hover:bg-m_black hover:text-m_yellow text-m_black font-medium rounded-b-lg py-2"
              onClick={logout}
            >
              <span className="text-[14px]">Log out</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
