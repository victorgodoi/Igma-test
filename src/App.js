import style from "./App.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import NewSletter from "./Components/NewSletter";

function App() {
  return (
    <div id={style.page}>
      <Header />
      <section id={style.limitedContent}>
        <Hero />
        <Clients />
        <NewSletter />
      </section>
    </div>
  );
}

export default App;
