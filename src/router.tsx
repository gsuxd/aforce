import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import SuspenseLoader from "@components/SuspenseLoader";
import { TransitionPage } from "@components/TransitionPage";
import DashboardLayout from "@components/DashboardLayout/Index";

const Loader = (Component: React.FC) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <TransitionPage
      ><Component {...props} /></TransitionPage>
    </Suspense>
  );

  const LoginPage = Loader(lazy(() => import("@pages/Login/Index")));
  const DashboardPage = Loader(lazy(() => import("@pages/Dashboard/Index")));
    
const routes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
          {
            path: "",
            element: <Navigate to="/dashboard/actions"/>
          },
          {
            path: "*",
            element: <DashboardPage/>
          }
        ]
    },
    {
      path: "*",
      element: <Navigate to="/login"/>
    }
];

const router = createBrowserRouter(routes, {});
export default router;