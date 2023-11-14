import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Div100vh from "react-div-100vh";
import { Toaster } from "sonner";
import { setDropdownIsActive } from "../../stores/movie/actions";
import {
  useIsFavoriteLoading,
  useIsReviewLoading,
} from "../../stores/movie/hooks";
import { useIsLoading } from "../../stores/user/hooks";
import Loading from "../../components/common/loading";

const WebLayout = () => {
  const isFavoriteLoading = useIsFavoriteLoading();
  const isLoading = useIsLoading();
  const isReviewLoading = useIsReviewLoading();

  return (
    <Div100vh className="w-full mx-auto flex flex-col p-5 relative">
      {(isFavoriteLoading || isLoading || isReviewLoading) && (
        <div
          className="flex justify-center items-center h-full w-full fixed top-0 left-0 overflow-hidden z-50 bg-m_black bg-opacity-30"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <Loading />
        </div>
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />

      <Header />
      <main
        className="absolute top-0 left-0 w-full h-full"
        onClick={() => {
          setDropdownIsActive(false);
        }}
      >
        <Outlet />
      </main>
    </Div100vh>
  );
};

export default WebLayout;
