import 'regenerator-runtime/runtime';
import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import {Redirect, Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Auth from "./components/auth/Auth";
import Root from "./components/root/Root";
import AuthService from "./services/AuthService";

function MainView() {
    const [auth, setAuth] = useState(AuthService.isAuthenticated());
    useEffect(() => setAuth(AuthService.isAuthenticated()));
    return auth ? <Root /> : <Redirect to="/login" />;
}

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Auth} />
                <Route path="/" component={MainView} />
            </Switch>
        </BrowserRouter>
    )
}
render(<App />, document.getElementById('root'))
