import React, { lazy, Suspense, Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from "./routes";
import { connect } from 'react-redux';
import AppBar from "./components/UserMenu";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { getItems, getLoadingItems } from './redux/contacts/contacts-selectors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
// import s from './App.module.css';

const HomeView = lazy(() =>
  import('./views/HomeView')
);

const ContactsView = lazy(() =>
  import('./views/ContactsView')
);

const loginView = lazy(() =>
  import('./views/LoginView')
);

const RegisterView = lazy(() =>
  import('./views/RegisterView')
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div className="app">
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PrivateRoute
              path={routes.contacts}
              redirectTo="/login"
              component={ContactsView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo="/contacts"
              component={loginView}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo="/"
              component={RegisterView}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: getLoadingItems(state),
});

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);