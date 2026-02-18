import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";

export default function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
    },
  ];

  return useRoutes(routes);
}
