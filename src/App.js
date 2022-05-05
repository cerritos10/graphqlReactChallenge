import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Main/MainContent";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Prueba from "./components/prueba";
import Confi from "./components/Configuracion/Confi";
import NotFound from "./components/404NotFound";


function App() {
  return (
    <Container>
      <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/configuracion" element={<Confi />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </BrowserRouter>
      
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