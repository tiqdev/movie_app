import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layouts/web";
import SearchPage from "../pages/search";
import ListPage from "../pages/list";
import DetailPage from "../pages/detail";
import FavoritesPage from "../pages/favorites";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/list/:q",
        element: <ListPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/favorites/",
        element: <FavoritesPage />,
      },
    ],
  },
]);

export default routes;
