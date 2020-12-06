import React, {useEffect, useState} from "react";
import requests from "../../lib/requests";
import {useHistory} from "react-router-dom";
import {removeToken} from "../../lib/auth";
import routes from "../../router/routes";
import useStyles from "./styles";

const Dashboard = () => {
    const classes = useStyles();

    const history = useHistory();
    const [user, setUser] = useState({});

    const onSignOut = (e) => {
        removeToken()
        history.push(routes.DASHBOARD);
    }

    useEffect(() => {
        const getMe = async () => {
            try {
                const user = await requests.getMe();
                setUser(user)
            } catch (e) {
                onSignOut()
            }
        }
        getMe();
    }, [])

    return (
        <div className={classes.wrapper}>

            <div className={classes.container}>
                <h3 className={classes.title}>Dashboard</h3>
                <div className={classes.title}>Welcome, {user.email}</div>
                <button className={classes.button} onClick={onSignOut}>Sign out</button>
            </div>
        </div>
    );
}

export default Dashboard;