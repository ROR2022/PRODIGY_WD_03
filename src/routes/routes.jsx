import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contac";
import Error from "../pages/Error";
import BasicTemplate from "../pages/BasicTemplate";
import StopwatchPage from "../pages/StopwatchPage";

export const routes = createHashRouter([
  {
    path: "/",
    element: (
      <BasicTemplate>
        <Home />
      </BasicTemplate>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <BasicTemplate>
        <About />
      </BasicTemplate>
    ),
  },
  {
    path: "/contact",
    element: (
      <BasicTemplate>
        <Contact />
      </BasicTemplate>
    ),
  },
  {
    path: "/stopwatch",
    element: (
      <BasicTemplate>
        <StopwatchPage />
      </BasicTemplate>
    ),
  },
  {
    path: "*",
    element: (
      <BasicTemplate>
        <Error />
      </BasicTemplate>
    ),
  },
]);
