import React from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import withStore from "~/Hocs/withStore";
import { routesMap } from "~/Routes";

const Navigation = () => {
  return (
    <ListGroup className="mt-4">
      <NavLink
        to={routesMap.products}
        className="list-group-item navigation-link"
        exact
      >
        Products
      </NavLink>
      <NavLink
        to={routesMap.cart}
        className="list-group-item navigation-link"
        exact
      >
        Cart
      </NavLink>
      <NavLink
        to={routesMap.order}
        className="list-group-item navigation-link"
        exact
      >
        Order
      </NavLink>
    </ListGroup>
  );
};

export default withStore(Navigation);
