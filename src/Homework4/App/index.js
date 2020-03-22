import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import routes, { routesMap } from "~/Routes";
import "./App.css";

@observer
class App extends React.Component {
  render() {
    let routesList = routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));

    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <ListGroup className="mt-4">
                <ListGroup.Item>
                  <Link to={routesMap.products}>Products</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={routesMap.cart}>Cart</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={routesMap.order}>Order</Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={9}>
              <Switch>{routesList}</Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
