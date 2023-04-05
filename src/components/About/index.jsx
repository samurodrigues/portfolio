import styled from "styled-components";

const StyledAbout = styled.section`

  margin: 3rem 5rem 0rem;

  

  div {
    height: 30vh;
    background-color: #ffffff;
    margin-bottom: 2rem;  
    border-radius: 15px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);

    display: grid;
    grid-template-columns: 3fr 1fr;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 20px 30px;
      font-size: 1.3rem;
      text-align: justify;
    }

    a {
      background-color: #dd3939;
      color: white;
      font-size: 1.3rem;
      font-weight: bold;
      text-align: center;
      padding: 1.5rem;
      border: none;
      border-radius: 20px;
      margin: 0px 10px 20px 0px;
      align-self: end;
      
      &:hover {
        background-color: #ff3d3d;
      }
    }
  }
`;

export default function About() {
  return (
    <StyledAbout>
      <div>
      <span>
        <p>
          Técnico em Informática integrado ao Ensino Médio no Instituto Federal Catarinense (IFC) <i>Campus</i> Araquari
        </p>
        <p>
          Apaixonado pela área da tecnologia, realizei o curso técnico junto ao meu ensino médio. Aprendendo noções de HTML, CSS, JavaScript, MySQL e a organização de aplicações 
        </p>
      </span>
      
      <a>Link do Currículo</a>
      </div>
    </StyledAbout>
  )
}