import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      className={classes.submit}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
