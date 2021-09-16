import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, Typography } from "@material-ui/core";
import { useForm, Form } from "../components/Form";
import Controls from "../components/Controls/Controls";

const initialValues = {
  emailAddress: "",
  password: "",
};

const Login = () => {
  const validate = (fieldValues = values) => {
    let fieldErrors = { ...errors, ...validateEmptyFields(fieldValues) };

    if ("emailAddress" in fieldValues && !fieldErrors.emailAddress) {
      fieldErrors.emailAddress = /$^|.+@.+..+/.test(fieldValues.emailAddress)
        ? null
        : "Please enter valid email address";
    }

    setErrors({ ...fieldErrors });

    if (fieldValues === values)
      return Object.values(fieldErrors).every(
        (fieldError) => fieldError === null
      );
  };

  const validateEmptyFields = (fieldValues) => {
    let fieldErrors = { ...errors };
    Object.keys(initialValues).forEach((field) => {
      if (field in fieldValues)
        fieldErrors[field] = fieldValues[field]
          ? null
          : "This field is required";
    });
    return fieldErrors;
  };

  const history = useHistory();

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialValues,
    true,
    validate
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      resetForm();
      history.push("/thank-you");
    }
  };

  return (
    <React.Fragment>
      <Box mb={2}>
        <Typography component="h6" variant="h6">
          Login into the system.
        </Typography>
      </Box>

      <Box color="text.secondary">
        <Typography component="p">
          Let's get started with the future.
        </Typography>
      </Box>

      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls.Input
              name="emailAddress"
              label="Email Address"
              value={values.emailAddress}
              onChange={handleInputChange}
              error={errors.emailAddress}
            />
          </Grid>

          <Grid item xs={12}>
            <Controls.Input
              name="password"
              type="password"
              label="Password"
              onChange={handleInputChange}
              error={errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <Controls.CheckBox
              name="rememberMe"
              label="Remember Me"
              value={values.rememberMe}
              onChange={handleInputChange}
              error={errors.rememberMe}
            />
          </Grid>
        </Grid>

        <Controls.Button
          type="submit"
          variant="contained"
          color="primary"
          text="Login"
          size="large"
        ></Controls.Button>
      </Form>
    </React.Fragment>
  );
};

export default Login;
