import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./stores/index";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index";
import "./index.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
