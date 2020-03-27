import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

function LinkButton(props) {
  const { to, match, location, history, staticContext, ...other } = props;
  return <Button {...other} onClick={() => history.push(to)} />;
}

export default withRouter(LinkButton);
