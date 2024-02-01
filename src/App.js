import styled from "./App.module.scss";
import Header from "./Components/Header";
// import limitedContent from "./Components/LimitedContent";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";

function App() {
  return (
    <div id={styled.page}>
      <Header />
      <div id={styled.limitedContent}>
        <Hero />
        <Clients />
      </div>
    </div>
  );
}

export default App;
