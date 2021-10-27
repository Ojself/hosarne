import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./screens/Contact";
import Employees from "./screens/Employees";
import Footer from "./components/Footer";
import History from "./screens/History";
import Home from "./screens/Home";
/* import Machinepark from "./screens/Machinepark"; */
import NavBar from "./components/NavBar";
/* import News from "./screens/News"; */
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import Certificates from "./screens/Certificates";

const App = () => {
  console.info("Looking for a developer?\ngithub.com/ojself");
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Contact} path="/kontakt" />
        <Route component={Employees} path="/ansatte" />
        <Route component={Projects} path="/prosjekter" />
        <Route component={History} path="/historie" />
        <Route component={Services} path="/tjenester" />
        <Route component={Certificates} path="/sertifiseringer" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

/* <Route component={Machinepark} path="/maskinpark" />
<Route component={News} path="/nyheter/:slug" />
<Route component={News} path="/nyheter" />  */

export default App;
