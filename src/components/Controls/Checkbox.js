import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox as MuiCheckBox,
} from "@material-ui/core";

const CheckBox = (props) => {
  const { name, label, value, error = null, onChange } = props;

  const convertToDefaultEventParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl {...(error && { error: true })}>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventParameter(name, e.target.checked))
            }
          />
        }
        label={label}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CheckBox;
