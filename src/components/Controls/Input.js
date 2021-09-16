import React from "react";
import TextField from "@material-ui/core/TextField";
import slugify from "react-slugify";

const Input = (props) => {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      id={name}
      name={name}
      variant="outlined"
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      autoComplete={slugify(label)}
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
};

export default Input;
