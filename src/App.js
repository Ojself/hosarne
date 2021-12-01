import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Humans from "./screens/Humans";
import NavBar from "./components/NavBar";
import Events from "./screens/Events";
import Event from "./screens/Event";
import Apartment from "./screens/Apartment";
import Gallery from "./screens/Gallery";

const App = () => {
  console.info("Looking for a developer?\ngithub.com/ojself");
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Apartment} path='/leiligheten' />
        <Route component={Gallery} path='/galleriet' />
        <Route component={Humans} path='/menneskene' />
        <Route component={Event} path='/program/:slug' />
        <Route component={Events} path='/program' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
