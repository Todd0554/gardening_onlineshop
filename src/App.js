import React from "react";
import {router} from './router/index';
import { HashRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
        <HashRouter>
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
        </HashRouter>
        <Footer />
    </div>
  );
}

export default App;
