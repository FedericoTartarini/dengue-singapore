import React, { Suspense, lazy } from "react";
import HomeView from "./Components/HomeView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Loader = lazy(() => import("./Components/Loader"));
const AboutView = lazy(() => import("./Components/AboutView"));
const NavigationBar = lazy(() => import("./Components/NavigationBar"));
const Footer = lazy(() => import("./Components/Footer"));

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
