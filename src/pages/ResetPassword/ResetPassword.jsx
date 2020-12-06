import React, {useState} from "react";
import requests from "../../lib/requests";
import useStyles from "./styles";
import {Link} from "react-router-dom";
import routes from "../../router/routes";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [link, setLink] = useState(null);
    const classes = useStyles();

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = await requests.resetPassword({email})
        setLink(newUser.link)
    }

    return (
        <div className={classes.container}>
            {!link && <form action="" onSubmit={onSubmit} className={classes.form}>
                <h4 className={classes.title}>Reset password</h4>
                <input
                    className={classes.input}
                    required
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <button className={classes.button}>Submit</button>
            </form>}
            {link && <div className={classes.form}>
                <h4 className={classes.title}>Your link</h4>
                <Link to={routes.ACTIVATION + "/" + link} className={classes.button}>{link}</Link>
            </div>}
        </div>
    );
}

export default ResetPassword;