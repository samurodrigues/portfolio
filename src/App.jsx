import styled from "styled-components";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
  const menu = {
    title: "Samuel Rodrigues",
    links: ["Home", "Sobre", "Tecnologias", "Projetos", "Contato"],
  };

  const StyledApp = styled.div`
    h2 {
      margin: 3rem;
      font-size: 3rem;
      font-weight: bold;
      color: #444444;
    }
  `;

  return (
    <StyledApp className="App">
      <Menu title={menu.title} links={menu.links} />
      <Banner />

      <h2>Sobre mim</h2>
      <About />

      <h2>Tecnologias</h2>
      <Technologies />
      <h2>Projetos</h2>
      <h2>Contato</h2>
    </StyledApp>
  );
}

export default App;
