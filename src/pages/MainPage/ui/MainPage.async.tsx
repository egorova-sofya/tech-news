import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      //@ts-expect-error test
      setTimeout(() => resolve(import("./MainPage")), 1000)
    )
);
