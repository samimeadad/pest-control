import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Telephone from './Components/Telephone/Telephone';

function App () {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
        </Switch>
        <Telephone></Telephone>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
