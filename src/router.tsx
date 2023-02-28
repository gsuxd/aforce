import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import SuspenseLoader from "@components/SuspenseLoader";
import { TransitionPage } from "@components/TransitionPage";

const Loader = (Component: React.FC) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <TransitionPage
      ><Component {...props} /></TransitionPage>
    </Suspense>
  );

  const LoginPage = lazy(() => import("@pages/Login/Index"));
//   const DashboardPage = lazy(() => import("@pages/Dashboard/Index"));

const routes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage/>
    },
    // {
    //     path: "/dashboard",
    //     element: <DashboardPage/>
    // }
];

const router = createBrowserRouter(routes, {});
export default router;