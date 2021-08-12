
import * as Styled from "./styled";
import { useRef } from "react";
import Left from "./components/Content/Left/Left";
import Right from "./components/Content/Left/Right/Right";
import MapGoogle from "./components/MapGoogle";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Styled.Content>

      <Styled.Links>
        <Styled.Link>HOME</Styled.Link>
        <Styled.Link onClick={handleAboutClick}>ABOUT</Styled.Link>
        <Styled.Link onClick={handleContactClick}>CONTACT US</Styled.Link>
      </Styled.Links>


      <Styled.About ref={aboutRef}>
        <Left />
        <Right />
      </Styled.About>


      <Styled.Contact ref={contactRef}>
        <Styled.Header> CONTACT US </Styled.Header>
        <form>
          <Styled.Text> Name* </Styled.Text>
          <Styled.Box />

          <Styled.Text>Email* </Styled.Text>
          <Styled.Box  />

          <Styled.Text>Phone* </Styled.Text>
          <Styled.Box />

          <Styled.Text>Message* </Styled.Text>
          <Styled.BoxText /> 
        </form>
        <Styled.Button>
          {" "}
          <Styled.T>SEND</Styled.T>{" "}
        </Styled.Button>
      </Styled.Contact>


      <MapGoogle />

    </Styled.Content>
  );
}

export default App;
