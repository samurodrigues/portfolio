import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import Cards from "../Cards";

const StyledTechnologies = styled.div`
  margin: 0rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1rem;
  justify-items: center;
`;

export default function Technologies() {
  return (
    <StyledTechnologies>
      <Cards img="git" title="Git" content="Versionamento de Código" />
      <Cards img="react" title="React" content="Biblioteca" />
      <Cards img="next" title="Next" content="React Framework" />
      <Cards img="styled-components" title="Styled Components" content="CSS-in-JS" />
    </StyledTechnologies>
  )
}