import React from "react";
import "./App.css";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/page2" exact element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
