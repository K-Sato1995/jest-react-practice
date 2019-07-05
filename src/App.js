import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeadLine from "./components/HeadLine";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadLine
        header={"HeadLine"}
        description={"This is the description of the HeadLine"}
      />
      <Footer />
    </div>
  );
}

export default App;
