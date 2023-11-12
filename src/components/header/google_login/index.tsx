import { BsGoogle } from "react-icons/bs";
import { loginWithGoogle } from "../../../stores/user/actions";
import { useIsLoading } from "../../../stores/user/hooks";

const GoogleLogin = () => {
  const isLoading = useIsLoading();

  const handleClick = () => {
    loginWithGoogle();
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="flex h-8 px-2 md:pr-3 gap-2 bg-m_yellow text-m_black items-center justify-start rounded-md hover:bg-m_brown hover:text-m_yellow transition-color duration-300 ease-in-out"
      >
        {isLoading ? (
          <span className="animate-spin">
            <BsGoogle />
          </span>
        ) : (
          <>
            <BsGoogle className="m_black" />
            <span className="hidden md:block text-[14px]">
              Sign in with Google
            </span>
          </>
        )}
      </button>
    </>
  );
};

export default GoogleLogin;
