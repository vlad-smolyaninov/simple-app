import React, {useState} from "react";
import requests from "../../lib/requests";
import useStyles from "./styles";
import {useHistory, useParams} from "react-router-dom";
import routes from "../../router/routes";

const Activation = () => {
    const classes = useStyles();
    const {link} = useParams();
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await requests.activateUser({link, password})
        history.push(routes.LOGIN);
    }

    return (
        <div className={classes.container}>
            <form action="" onSubmit={onSubmit} className={classes.form}>
                <h4 className={classes.title}>Set new password</h4>
                <input
                    required
                    placeholder="New password"
                    className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <input
                    required
                    placeholder="Repeat password"
                    className={classes.input}
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button className={classes.button} disabled={!password && confirmPassword !== password}>Submit</button>
            </form>
        </div>
    );
}

export default Activation;