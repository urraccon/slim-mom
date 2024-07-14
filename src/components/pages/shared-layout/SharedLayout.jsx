import { Suspense, useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Main } from './SharedLayout.styles';
import { Loader } from 'components/common/components/Loader';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading } from 'components/redux/loading/actions';
import {
  selectAuthStatus,
  selectLoggedIn,
  selectUserName,
} from 'components/redux/auth/selectors';

export const SharedLayout = () => {
  const [type, setType] = useState('public');

  const username = useSelector(selectUserName);
  const loggedIn = useSelector(selectLoggedIn);
  const status = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      setType('private');
    } else {
      setType('public');
    }
  }, [loggedIn]);

  useEffect(() => {
    if (status === 'loading') {
      dispatch(startLoading());
    }

    if (status !== 'loading') {
      dispatch(stopLoading());
    }
  }, [status, dispatch]);

  return (
    <Main>
      <Header type={type} username={username} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Loader />
    </Main>
  );
};
