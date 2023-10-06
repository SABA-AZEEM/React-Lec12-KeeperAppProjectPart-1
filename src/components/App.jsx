import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <Note />
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
