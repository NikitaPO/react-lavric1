import React from "react";
import { observer, Provider } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import routes, { routesMap } from "~/Routes";
import Navigation from "~con/Navigation";
import stores from "~/Stores";
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
      <Provider stores={stores}>
        <Router>
          <Container>
            <Navigation />
            <Row>
              <Col>
                <ListGroup className="mt-4">
                  <ListGroup.Item>
                    <NavLink to={routesMap.products} exact>
                      Products
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLink to={routesMap.cart} exact>
                      Cart
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLink to={routesMap.order} exact>
                      Order
                    </NavLink>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={9}>
                <Switch>{routesList}</Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
