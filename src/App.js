import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Steps from "./Steps";
import CallToAction from "./CallToAction";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Steps></Steps>
      <CallToAction></CallToAction>
    </div>
  );
}

export default App;
