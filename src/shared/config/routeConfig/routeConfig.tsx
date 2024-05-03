import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile",
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
};
