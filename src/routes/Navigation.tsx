// REACT IMPORTS
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// ROUTES
import { routes } from './routes';

// HOOKS
import { useScreenDimensions } from '../hooks/useScreenDimensions';

// COMPONENTS
import { Loader } from '../components/shared/Loader';
import { Navbar } from '../components/shared/Navbar';

export const Navigation = (): JSX.Element => {
  const { screenWidth } = useScreenDimensions();

  return (
    <BrowserRouter>
      <Navbar />
      {screenWidth > 767 ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      ) : (
        routes.map(
          ({ path, Component }): JSX.Element => <Component key={path} />
        )
      )}
    </BrowserRouter>
  );
};
