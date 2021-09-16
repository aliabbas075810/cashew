import { Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Cashew Payments Technology Limited. All Rights Reserved "}
    </Typography>
  );
};

export default Copyright;
