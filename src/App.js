import style from "./App.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Container from "./Components/Container";

function App() {
  return (
    <main id={style.page}>
      <Header />
      <Container className={style.animation}>
        <Hero />
        <Clients />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
