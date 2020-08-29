import React, { Suspense } from "react";
import HomeView from "./Components/HomeView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutView from "./Components/AboutView";
import Loader from "./Components/Loader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router basename="/">
      <div className="relative pb-10 min-h-screen">
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/about">
              <AboutView />
            </Route>
          </Switch>
        </Suspense>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
