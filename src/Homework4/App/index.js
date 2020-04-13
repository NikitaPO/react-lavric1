import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withStore from "~/Hocs/withStore";
import routes from "~/Routes";
import Header from "~con/Header";
import Navigation from "~con/Navigation";
import "./App.css";

class App extends React.Component {
  render() {
    let routesList = routes.map((route) => (
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
          <Header />
          <Row>
            <Col>
              <Navigation />
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

export default withStore(App);
