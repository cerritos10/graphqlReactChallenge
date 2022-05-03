import React from "react";
import styled from "styled-components";
import {hoverEffect } from "../utils";
import { faEllipsis, faPaperclip, faFolderTree, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarImage from "../assets/user.png";


function InProgress() {
  return (
    <ProgressCard>
      <CardContent>
        <ProgressText>Progress</ProgressText>
        <IconPoints>
        <FontAwesomeIcon icon={faEllipsis} />
        </IconPoints>
        <PointsText>
        <ProgressText>Poinst</ProgressText>
        </PointsText>
        <DateText>10/10/2020</DateText>
        <TagsText>
            <GreenTags>Poinst</GreenTags>
        <YellowTags>Poinst</YellowTags>
        </TagsText>
        <Footer>
        <Avatar src={AvatarImage} />
        <Options>
        <FontAwesomeIcon icon={faPaperclip} />
        <FontAwesomeIcon icon={faFolderTree} />
        <FontAwesomeIcon icon={faComment} />
        </Options>
        </Footer>
      </CardContent>
    </ProgressCard>
  );
}

const IconPoints = styled.div`
    float: right;
    margin-top: -30px;
`;

const PointsText = styled.div`
    margin-top: 30px;
`;

const DateText = styled.div`
float: right;
background-color: #222528;
color: #fff;
margin-top: -25px;
padding: 3px;
border-radius:3px;
`;

const TagsText = styled.div`
margin-top:20px;
    display:flex;
    width:90%;
    `;

const GreenTags = styled.div`
background-color: #222528;
color: #72DD08;
padding: 3px;
border-radius:3px;
width:30%;
text-align: center;
margin-right:10px;
`;

const YellowTags = styled.div`
background-color: #222528;
color: #F8F420;
padding: 3px;
border-radius:3px;
width:30%;
text-align: center;
`;

const Footer = styled.div`
margin-top: 2px;
`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius:150px;
margin-top: 10px;
`;

const Options = styled.div`
float: right;
margin-top: 30px;
margin-right: 10px;
`;

const ProgressCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #2d2f33;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  margin-bottom:10px;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 0.2rem;
`;

// const Chart = styled.div`
//   display: flex;
//   justify-content: center;
//   svg {
//     height: 4rem;
//     width: 4rem;
//   }
// `;

const ProgressText = styled.h3`
  text-align: left;
  font-weight: normal;
  padding: 0px 0;
`;
export default InProgress;