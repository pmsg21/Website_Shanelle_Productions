import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '../components/shared/Loader';
import { Navbar } from '../components/shared/Navbar';
import { routes } from './routes';
import { Suspense } from 'react';
import { useScreenDimensions } from '../hooks/useScreenDimensions';

export const Navigation = () => {
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
        routes.map(({ path, Component }) => <Component key={path} />)
      )}
    </BrowserRouter>
  );
};
