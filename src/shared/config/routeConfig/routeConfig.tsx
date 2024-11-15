import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RouterPath[AppRoutes.PROFILE],
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
