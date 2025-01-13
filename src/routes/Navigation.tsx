// REACT IMPORTS
import { ReactElement, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// ROUTES
import { routes } from "./routes";

// HOOKS
import { useScreenDimensions } from "../hooks";

// COMPONENTS
import { Loader, Navbar } from "../components/shared";

export const Navigation = (): ReactElement => {
  const { isPhone } = useScreenDimensions();

  return (
    <BrowserRouter>
      <Navbar />
      {!isPhone ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(
              ({ path, Component }): ReactElement => (
                <Route key={path} path={path} element={<Component />} />
              )
            )}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      ) : (
        routes.map(
          ({ path, Component }): ReactElement => <Component key={path} />
        )
      )}
    </BrowserRouter>
  );
};
