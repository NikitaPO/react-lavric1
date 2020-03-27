import React from "react";
import { routesMap } from "~/Routes";
import LinkButton from "~com/LinkButton";
export default function(props) {
  return (
    <>
      <h1 className="header-title">Error 404, page not found</h1>
      <hr />
      <div className="alert alert-warning">
        <p>
          Go to &nbsp;
          <LinkButton to={routesMap.home} className="btn btn-primary">
            home page
          </LinkButton>
        </p>
      </div>
    </>
  );
}
