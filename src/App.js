import styled from "./App.module.scss";
import Header from "./Components/Header";
// import limitedContent from "./Components/LimitedContent";
import Hero from "./Components/Hero";

function App() {
  return (
    <div id={styled.page}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
