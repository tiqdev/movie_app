import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layouts/web";
import SearchPage from "../pages/search";
import ListPage from "../pages/list";
import DetailPage from "../pages/detail";

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
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);

export default routes;
