import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "~/Homework4/Routes";
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
        <div className="container">{routesList}</div>
      </Router>
    );
  }
}

export default App;
