import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import InHouse from "./screens/InHouse";
import Team from "./screens/Team";
import NavBar from "./components/NavBar";
import Events from "./screens/Events";
import Event from "./screens/Event";
import Apartment from "./screens/Apartment";
import Gallery from "./screens/Gallery";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  console.info("Looking for a developer?\ngithub.com/ojself");
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Apartment} path='/leiligheten' />
        <Route component={InHouse} path='/in-house:slug' />
        <Route component={InHouse} path='/in-house' />
        <Route component={Gallery} path='/galleriet' />
        <Route component={Team} path='/team' />
        <Route component={Event} path='/program/:slug' />
        <Route component={Events} path='/program' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
