import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/UserProfile/User';
import { authenticate } from './store/session';
import SplashPage from "./components/splash-page/SplashPage";
import HomePage from './components/Homepage';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import Following from './components/Following/following';
import Followers from './Followers/followers';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/splash" exact={true}>
          <SplashPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/user/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/user/:userId/following' exact={true} >
          <Following />
        </ProtectedRoute>
        <ProtectedRoute path='/user/:userId/followers' exact={true} >
          <Followers />
        </ProtectedRoute>
        <ProtectedRoute path='/post/new' exact={true}>
          <PostForm />
        </ProtectedRoute>
        <ProtectedRoute path='/post/:postId' exact={true} >
          <PostDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
