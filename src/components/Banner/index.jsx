import styled from "styled-components";
import bg from '../../assets/bg.jpg';
import photo from '../../assets/photo.png';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const StyledBanner = styled.header `
  background: url(${bg}) no-repeat center center/cover;
  background-attachment: fixed;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: white;
  }

  section {

    background-color: rgba(0, 0, 0, 0.9);
    padding: 3rem;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      border-radius: 50%;
    }

    h1{
      margin-top: 20px;
      font-size: 3rem;
      font-weight: bold;
    }

    p {
      font-size: 1.3rem;
      font-style: italic;
    }

    .links {
      margin-top: 20px;

      svg {
        margin-left: 10px;
        font-size: 1.8rem;
      }
    }

  }
`;

export default function Banner() {
  return (
    <StyledBanner>
      <section>
        <img src={photo} alt="Samuel Rodrigues" />
        <h1>Samuel Rodrigues</h1>
        <p>Front-End Developer</p>
        <div className="links">
          <a href=""><FaGithub /></a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaWhatsapp /></a>
        </div>
      </section>
    </StyledBanner>
  )
}