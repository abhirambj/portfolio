import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
