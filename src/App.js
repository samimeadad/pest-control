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
import Wasp from './Components/Service/Wasp';
import Rodent from './Components/Service/Rodent';
import Cockroach from './Components/Service/Cockroach';
import Flies from './Components/Service/Flies';
import BirdProofing from './Components/Service/BirdProofing';
import Fleas from './Components/Service/Fleas';
import WaspHeader from './Components/Service/WaspHeader';
import RodentHeader from './Components/Service/RodentHeader';
import CockroachHeader from './Components/Service/CockroachHeader';
import FliesHeader from './Components/Service/FliesHeader';
import BirdProofingHeader from './Components/Service/BirdProofingHeader';
import FleasHeader from './Components/Service/FleasHeader';


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
          <Route exact path="/service/wasp">
            <WaspHeader />
            <Wasp />
          </Route>
          <Route exact path="/service/rodent">
            <RodentHeader />
            <Rodent />
          </Route>
          <Route exact path="/service/cockroach">
            <CockroachHeader />
            <Cockroach />
          </Route>
          <Route exact path="/service/flies">
            <FliesHeader />
            <Flies />
          </Route>
          <Route exact path="/service/birdproofing">
            <BirdProofingHeader />
            <BirdProofing />
          </Route>
          <Route exact path="/service/fleas">
            <FleasHeader />
            <Fleas />
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
