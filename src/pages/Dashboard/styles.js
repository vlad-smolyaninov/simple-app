import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'center'

    },
    container: {
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        textAlign: 'center',
        border: '1px solid black',
        padding: '5px 10px',
        cursor: 'pointer',
        color: "black",
        fontSize: 14,
        fontWeight: 'bold',
        textDecoration: 'none',
        background: 'white',
        display: 'block',
        outline: 'none',
        "&:hover": {
            background: '#eee',
        },
        "&:disabled": {
            color: "#999",
        }
    },
})

export default useStyles;
