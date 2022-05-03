import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import AvatarImage from "../assets/logo.jfif";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
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

// const ContactContainer = styled.div`
//   width: 60%;
//   background-color: #091322;
//   color: #c4c4c4;
//   height: 15%;
//   margin: auto auto;
//   border-radius: 1rem;
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
//   a {
//     color: white;
//     text-decoration: none;
//   }
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     margin-bottom: 2rem;
//   }
// `;

export default Sidebar;