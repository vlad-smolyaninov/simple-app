import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > *': {
            marginBottom: '10px',
        }
    },
    title: {
        textAlign: 'center',
    },
    label: {
        textAlign: 'center',
        border: '1px solid black',
        padding: '5px 10px',
        cursor: 'pointer',
        color: "black",
        textDecoration: 'none',
        "&:hover": {
            background: '#eee',
        }
    },
    input: {
        padding: '5px 10px',
        textAlign: 'center',
        outline: 'none',
        border: '1px solid black',
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
