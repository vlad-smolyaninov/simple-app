import React, {useState} from "react";
import useStyles from "./styles";
import requests from "../../lib/requests";
import {setToken} from "../../lib/auth";
import {Link, useHistory} from "react-router-dom";
import routes from "../../router/routes";

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await requests.login({email, password});
            setToken(token)
            history.push(routes.DASHBOARD);
        } catch (e) {
            console.error(e);
            alert('Wrong credentials')
        }
    }

    return (
        <div className={classes.container}>
            <form action="" onSubmit={onSubmit} className={classes.form}>
                <h4 className={classes.title}>Sign in</h4>
                <input
                    required
                    placeholder="Email"
                    className={classes.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <input
                    required
                    placeholder="New password"
                    className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button className={classes.button}>Submit</button>
                <Link to={routes.RESET_PASSWORD} className={classes.button}>Reset password</Link>
            </form>
        </div>
    );
}

export default Login;