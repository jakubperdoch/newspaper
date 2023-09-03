import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";

const routesList = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/article",
    compotent: Blog,
  },
];

const Router = () => {
  const routeComponent = routesList.map(({ path, component }, key) => {
    return <Route key={key} path={path} Component={component}></Route>;
  });
  return (
    <Routes>
      <Route element={<Layout />}>{routeComponent}</Route>
    </Routes>
  );
};
export default Router;
