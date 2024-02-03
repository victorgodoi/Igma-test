import style from "./App.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import NewSletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import Container from "./Components/Container";

function App() {
  return (
    <main id={style.page}>
      <Header />
      <Container className={style.animation}>
        <Hero />
        <Clients />
        <NewSletter />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
