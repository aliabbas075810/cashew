import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Grid, Box, Typography } from "@material-ui/core";
import { useForm, Form } from "../components/Form";
import Controls from "../components/Controls/Controls";
import Copyright from "../components/Copyright";
import * as cashewService from "../services/cashewService";

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
  dateOfBirth: new Date(),
  streetAddress: "",
  country: "",
  city: "",
  agreeTermsConditions: false,
};

const Register = () => {
  const validate = (fieldValues = values) => {
    let fieldErrors = { ...errors, ...validateEmptyFields(fieldValues) };

    if ("emailAddress" in fieldValues && !fieldErrors.emailAddress) {
      fieldErrors.emailAddress = /$^|.+@.+..+/.test(fieldValues.emailAddress)
        ? null
        : "Please enter valid email address";
    }

    if ("phoneNumber" in fieldValues && !fieldErrors.phoneNumber) {
      fieldErrors.phoneNumber = fieldValues.phoneNumber.match(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      )
        ? null
        : "Please enter a valid phone number";
    }

    if ("password" in fieldValues && !fieldErrors.password) {
      fieldErrors.password =
        fieldValues.password.length >= 8
          ? null
          : "Password should be of minimum 8 characters length";
    }

    if ("confirmPassword" in fieldValues && !fieldErrors.confirmPassword) {
      fieldErrors.confirmPassword =
        fieldValues.confirmPassword === values.password
          ? null
          : "Password you entered do not match";
    }

    if ("dateOfBirth" in fieldValues && !fieldErrors.dateOfBirth) {
      const currentYear = moment(new Date(), "YYYY");
      const birthYear = moment(fieldValues.dateOfBirth, "YYYY");
      const age = currentYear.diff(birthYear, "y");

      fieldErrors.dateOfBirth =
        age >= 18 ? null : "You must be over 18 years of age";
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

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);

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
          Meet cashew, your new favorite way to pay.
        </Typography>
      </Box>

      <Box color="text.secondary">
        <Typography component="p">
          Let's get you all set up so you can verify your personal account and
          begin setting up your profile.
        </Typography>
      </Box>

      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="emailAddress"
              label="Email Address"
              value={values.emailAddress}
              onChange={handleInputChange}
              error={errors.emailAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="phoneNumber"
              label="Phone Number"
              value={values.phoneNumber}
              onChange={handleInputChange}
              error={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="password"
              type="password"
              label="Password"
              onChange={handleInputChange}
              error={errors.password}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controls.DatePicker
              name="dateOfBirth"
              label="Date of Birth"
              value={values.dateOfBirth}
              onChange={handleInputChange}
              error={errors.dateOfBirth}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controls.Select
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              options={cashewService.genders}
              error={errors.gender}
            />
          </Grid>

          <Grid item xs={12}>
            <Controls.Input
              name="streetAddress"
              label="Street Address"
              value={values.streetAddress}
              onChange={handleInputChange}
              error={errors.streetAddress}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controls.Select
              name="country"
              label="Country"
              value={values.country}
              onChange={handleInputChange}
              options={cashewService.countries}
              error={errors.country}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Select
              name="city"
              label="City"
              value={values.city}
              onChange={handleInputChange}
              options={cashewService.getCities(values.country)}
              error={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.CheckBox
              name="agreeTermsConditions"
              label="I confirm that I have read, consent and agree to User Agreement."
              value={values.agreeTermsConditions}
              onChange={handleInputChange}
              error={errors.agreeTermsConditions}
            />
          </Grid>
        </Grid>

        <Controls.Button
          type="submit"
          variant="contained"
          color="primary"
          text="Register"
          size="large"
        ></Controls.Button>
      </Form>
      <Box mt={2}>
        <Copyright />
      </Box>
    </React.Fragment>
  );
};

export default Register;
