import classes from "./Button.module.css";

const Button = (props) => {
    return <a href="#" className={classes.button}>{props.children}</a>
};

export default Button;
