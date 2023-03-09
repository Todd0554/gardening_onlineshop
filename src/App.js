import React from "react";
import {router} from './router/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import ShowProducts from "./components/ShowProducts";
function App() {
  return (
    <div className="App">
          <Router>
      <TopBar />
      <NavBar />
      <ShowProducts />
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
    </div>
  );
}

export default App;
