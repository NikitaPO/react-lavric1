import React from "react";
import { withRouter } from "react-router-dom";

function LinkButton(props) {
  const { to, match, location, history, staticContext, ...other } = props;
  
  return <button {...other} onClick={() => history.push(to)} />;
}

export default withRouter(LinkButton);
