import style from "./App.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";

function App() {
  return (
    <div id={style.page}>
      <Header />
      <section id={style.limitedContent}>
        <Hero />
        <Clients />
      </section>
    </div>
  );
}

export default App;
