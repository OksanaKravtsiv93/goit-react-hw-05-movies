import { BiSolidCameraMovie } from 'react-icons/bi';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHead, NavigationLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <MainHead>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">
            <BiSolidCameraMovie />
            Movies
          </NavigationLink>
        </nav>
      </MainHead>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
