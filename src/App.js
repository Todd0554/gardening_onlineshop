import React from "react";
import {router} from './router/index';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
        <Router>
          <TopBar />
          <NavBar />

          {/* <WeatherSearchBar /> */}
          <main className="pb-3">
          <React.Suspense>
              <Routes>
                  {router.map((e,i) => (
                    <Route path={e.path} element={<e.element/>} key={i} ></Route>
                  )
                  )}
              </Routes>
          </React.Suspense>
          </main>
          {/* <Footer /> */}
        </Router>
        <Footer />
    </div>
  );
}

export default App;
