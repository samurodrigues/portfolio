import styled from "styled-components"

const StyledMenu = styled.nav`
  width: 100vw;
  height: 7vh;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.3rem;
  font-weight: bold;

  background-color: rgba(0,0,0,0.75);

  a {
    color: white;
    transition: 200ms;

    &:hover {
      color: #eeb600;
    }
  }

  ul {
    display: flex;
    column-gap: 5rem;
  }
`;

export default function Menu(props) {
  return (
    <StyledMenu>
      <a href="/">{props.title}</a>
      <ul>
        {props.links.map((link) => <li><a>{link}</a></li>)}
      </ul>
    </StyledMenu>
  )
}