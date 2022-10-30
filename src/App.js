import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Whishlist from "./pages/Whishlist";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            {/* <Route exact path="" element={<Home />} />*/}
            <Route exact path="/whishlist" element={<Whishlist />} />
            <Route exact path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
