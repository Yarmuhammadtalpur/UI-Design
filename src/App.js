import "./App.css";
import Cards from "./components/CardSection/Cards";
import Hero from "./components/HeroSection/Hero";
import Marking from "./components/Marking/Marking";
import Navbar from "./components/Navbar/Navbar";
import QADept from "./components/QADept/QADept";
import QAstandards from "./components/QAStandards/QAstandards";
import Quality from "./components/QualitySection/Quality";
import Recomendation from "./components/Recomendation/Recomendation";
import Staff from "./components/staff/Staff";
import TimelineSec from "./components/timeline/TimelineSec";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TimelineSec />
      <Cards />
      <Quality />
      <QADept />
      <QAstandards />
      <Recomendation />
      <Staff />
      <Marking />
    </div>
  );
}

export default App;
