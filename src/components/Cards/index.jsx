import styled from "styled-components";

const StyledCard = styled.div`
  height: 300px;
  width: 350px;
  background-color: #3a3a3a;
  border-radius: 15px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    height: 8rem;
    fill: #ffffff;
  }

  h5 {
    font-size: 2.5rem;
    color: #ffffff;
    white-space: nowrap;
  }
  
  p {
    color: #ffffff;
    font-size: 1.2rem;
  }
`;

export default function Cards(props) {
  return(
    <StyledCard>
        <img src={`src/assets/${props.img}.png`} alt={`Logo ${props.title}`} />
        <h5>{props.title}</h5>
        <p>{props.content}</p>
    </StyledCard>
  )
}