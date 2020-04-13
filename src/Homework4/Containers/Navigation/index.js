import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import withStore from "~/Hocs/withStore";
import { routesMap } from "~/Routes";

const Navigation = () => {
  const listGroup = React.createRef();
  const [checkLinks, setCheckLinks] = useState(false);

  useEffect(() => {
    const links = listGroup.current.childNodes;
    links.forEach((link) => {
      link.firstChild.classList.contains("active")
        ? link.classList.add("active")
        : link.classList.remove("active");
    });
    setCheckLinks(false);
  }, [checkLinks]);

  const handleClick = () => setCheckLinks(true);

  return (
    <ListGroup className="mt-4" ref={listGroup}>
      <ListGroup.Item>
        <NavLink
          to={routesMap.products}
          onClick={handleClick}
          className="navigation-link"
          exact
        >
          Products
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink
          to={routesMap.cart}
          onClick={handleClick}
          className="navigation-link"
          exact
        >
          Cart
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink
          to={routesMap.order}
          onClick={handleClick}
          className="navigation-link"
          exact
        >
          Order
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default withStore(Navigation);
