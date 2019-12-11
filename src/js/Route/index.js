import React, { Component, Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = lazy(() => import("../Screens/HomePage/index"));
const LoginPage = lazy(() =>  import("../Screens/LoginPage/index"));

const Routers = () => (
    <Router>
        <Suspense fallback={null}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Suspense>
    </Router>
)

export default Routers