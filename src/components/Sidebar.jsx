import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/logo.jfif";
import  "./Modal.css"

function Sidebar() {
  return (

    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
          <div className="red-container">
          <a className="menu" href="/"><h3>Dashboard</h3></a>
          </div>
           
          </Link>
          <Link>
          <div className="red-container">
          <a className="menu" href="/configuracion"><h3>Configuracion</h3></a>
          </div>
          </Link>

        </Links>
        {/* <ContactContainer>
          <span>Having troubles?</span>
          <a href="/">Contact us </a>
        </ContactContainer> */}
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20% ;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #2d2f33;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Avatar = styled.img`
  height: 6rem;
  border-radius: 5rem;
  margin-top: 20%;
`;

// const Name = styled.h1`
//   color: white;
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin: 0.8rem 0 0.5rem 0;
// `;

const LinksContainer = styled.div`
  background-color: #2d2f33;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 15%;
  margin-bottom: 2rem;
  margin-top:0px;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 200;
  }
  svg {
    font-size: 12px;
    margin-top: 3%;
  }
`;

export default Sidebar;