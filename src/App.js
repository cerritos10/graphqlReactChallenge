import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  background: #222528;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;