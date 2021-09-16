import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  const { name, label, value, error = null, onChange } = props;

  const convertToDefaultEventParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        openTo="year"
        views={["year", "month", "date"]}
        clearable
        disableFuture
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        value={value}
        fullWidth
        onChange={(date) =>
          onChange(convertToDefaultEventParameter(name, date))
        }
        {...(error && { error: true, helperText: error })}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
