import React, {lazy, Suspense} from "react";
import injectSheet from "react-jss";
import {BrowserRouter, Switch,} from "react-router-dom";
import routes from "./routes";
import PrivatePage from "./PrivatePage";
import Page from "./Page";
import styles from "./styles";
import {getToken} from "../lib/auth";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashbaord"));
const Login = lazy(() => import("../pages/Login/Login"));
const Activation = lazy(() => import("../pages/Activation/Activation"));
const ResetPassword = lazy(() => import("../pages/ResetPassword/ResetPassword"));

const Router = () => {
    const checkAuth = () => {
        return !!getToken();
    };

    return (
        <BrowserRouter>
            <Suspense fallback={''}>
                <Switch>
                    <PrivatePage title='Main page' isAuthenticated={() => checkAuth()} exact
                                 path={routes.DASHBOARD}
                                 component={Dashboard}/>
                    <Page title='Login' path={routes.LOGIN} component={Login}/>
                    <Page title='Activation' path={routes.ACTIVATION + '/:link'} component={Activation}/>
                    <Page title='Reset password' path={routes.RESET_PASSWORD} component={ResetPassword}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default injectSheet(styles)(Router);