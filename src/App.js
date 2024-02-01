import style from "./App.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import NewSletter from "./Components/NewSletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id={style.page}>
      <Header />
      <section id={style.limitedContent}>
        <Hero />
        <Clients />
        <NewSletter />
        <Footer />
      </section>
    </div>
  );
}

export default App;
