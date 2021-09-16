import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select as MuiSelect,
} from "@material-ui/core";

const Select = (props) => {
  const { name, label, value, error = null, onChange, options } = props;

  return (
    <FormControl variant="outlined" fullWidth {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        id={name}
        name={name}
        label={label}
        value={value ? value : " "}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
