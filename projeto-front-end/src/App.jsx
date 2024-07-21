import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import React, { Suspense, lazy } from "react";

const NotFound = lazy(() => import("./NotFound"));
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const UserProfille = lazy(() => import("./UserProfile"));


function App = () => {
  return ( 
    <Router>
        <header/>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/user/:id" component={UserProfile} />
            <Route path="*" Component={NotFound} />
          </Switch>
        </Suspense>
        <Footer/>
    </Router>
   );
}
 
export default App;