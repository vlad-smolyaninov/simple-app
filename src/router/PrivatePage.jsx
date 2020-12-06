import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import routes from "./routes";

const PrivatePage = ({title, component: Component, isAuthenticated, ...rest}) => {
    useEffect(() => {
        document.title = title;
    });

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? <Component {...props}/> : <Redirect to={routes.LOGIN}/>
            }
        />
    );
}

export default PrivatePage;
