import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import AboutHeader from './Components/About/AboutHeader';
import Contact from './Components/Contact/Contact';
import ContactHeader from './Components/Contact/ContactHeader';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Service from './Components/Service/Service';
import ServiceHeader from './Components/Service/ServiceHeader';
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
            <AboutHeader />
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactHeader />
            <Contact />
          </Route>
          <Route exact path="/service">
            <ServiceHeader />
            <Service />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Telephone></Telephone>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
