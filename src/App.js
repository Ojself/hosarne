import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {
  console.info("Looking for a developer?\ngithub.com/ojself");
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
