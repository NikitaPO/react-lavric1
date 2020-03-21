import React from "react";
import { observer } from "mobx-react";
import router from "~s/router";
import "./App.css";

@observer
class App extends React.Component {
  render() {
    return <div className="container">{router.component}</div>;
  }
}

export default App;
