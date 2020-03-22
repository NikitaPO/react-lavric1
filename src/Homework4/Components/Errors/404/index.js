import React from "react";
import { Link } from "react-router-dom";
import { routesMap } from "~/Routes";
Homework
export default function() {
  return (
    <>
      <h1>Error 404, page not found</h1>
      <hr />
      <div className="alert alert-warning">
        <p>
          Go to <Link to={routesMap.cart}>home page</Link>
        </p>
      </div>
    </>
  );
}
