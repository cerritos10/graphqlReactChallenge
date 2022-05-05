import React from "react";
import "./InProgress.css";
import { faEllipsis, faPaperclip, faFolderTree, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarImage from "../../assets/user.png";


 const InProgress = ({task}) =>  {
  if (task ===null) return null

  return (
    <div className="space">
        <div className="ProgressCard">
          {task.map(t => <div className="CardContent" key={t.id}>
            <h3 className="ProgressText">{t.name}</h3>
            <FontAwesomeIcon className="IconPoints" icon={faEllipsis} />
            <div className="PointsText">
            <h3 className="ProgressText">{t.pointEstimate}</h3>
            </div>
            <div className="DateText">
              {t.dueDate.substr(0,10)}
            </div>
            <div className="TagsText">
                {t.tags[0] ? <div className="GreenTags">{t.tags[0]}</div> : ''}
                {t.tags[1] ? <div className="YellowTags">{t.tags[1]}</div> : ''}
                {t.tags[2] ? <div className="GreenTags">{t.tags[2]}</div> : ''}
                {t.tags[3] ? <div className="YellowTags">{t.tags[3]}</div> : ''}
            </div>
            <div className="Footer">
              <img className="Avatar" src={AvatarImage} alt="" />
            </div>
            <div className="Options">
            <FontAwesomeIcon icon={faPaperclip} />
            <FontAwesomeIcon icon={faFolderTree} />
            <FontAwesomeIcon icon={faComment} />
            </div>
    </div>)}
    </div>
    </div>
    
  )
}

export default InProgress

// import React from "react";
// import styled from "styled-components";
// import {hoverEffect } from "../utils";
// import { faEllipsis, faPaperclip, faFolderTree, faComment } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AvatarImage from "../assets/user.png";
// import {gql, useQuery} from '@apollo/client'

// const TASKS_INPROGRESS = gql`
// query{
//   tasks(input:{
//     assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
//     status:CANCELLED
//   }){
//     id
//     assignee{
//       id
//     }
//     name
//     tags
//     dueDate
//     pointEstimate
//     creator{
//       avatar
//     }
    
//   }
//   }
  
// `;

// function InProgress() {
//   const {data, error, loading} = useQuery(TASKS_INPROGRESS)
//   if(error) return <span style='color:red'>{error}</span>
//   return (

//     <ProgressCard>
//       <CardContent>
//         <ProgressText>data</ProgressText>
//         <IconPoints>
//         <FontAwesomeIcon icon={faEllipsis} />
//         </IconPoints>
//         <PointsText>
//         <ProgressText>Poinst</ProgressText>
//         </PointsText>
//         <DateText>10/10/2020</DateText>
//         <TagsText>
//             <GreenTags>Poinst</GreenTags>
//             <YellowTags>Poinst</YellowTags>
//         </TagsText>
//         <Footer>
//         <Avatar src={AvatarImage} />
//         <Options>
//         <FontAwesomeIcon icon={faPaperclip} />
//         <FontAwesomeIcon icon={faFolderTree} />
//         <FontAwesomeIcon icon={faComment} />
//         </Options>
//         </Footer>
//       </CardContent>
//     </ProgressCard>
//   );
// }

// const IconPoints = styled.div`
//     float: right;
//     margin-top: -30px;
// `;

// const PointsText = styled.div`
//     margin-top: 30px;
// `;

// const DateText = styled.div`
// float: right;
// background-color: #222528;
// color: #fff;
// margin-top: -25px;
// padding: 3px;
// border-radius:3px;
// `;

// const TagsText = styled.div`
// margin-top:20px;
//     display:flex;
//     width:90%;
//     `;

// const GreenTags = styled.div`
// background-color: #222528;
// color: #72DD08;
// padding: 3px;
// border-radius:3px;
// width:30%;
// text-align: center;
// margin-right:10px;
// `;

// const YellowTags = styled.div`
// background-color: #222528;
// color: #F8F420;
// padding: 3px;
// border-radius:3px;
// width:30%;
// text-align: center;
// `;

// const Footer = styled.div`
// margin-top: 2px;
// `;

// const Avatar = styled.img`
// width:50px;
// height:50px;
// border-radius:150px;
// margin-top: 10px;
// `;

// const Options = styled.div`
// float: right;
// margin-top: 30px;
// margin-right: 10px;
// `;

// const ProgressCard = styled.div`
//   height: 100%;
//   width: 14rem;
//   background-color: #2d2f33;
//   padding: 1rem;
//   border-radius: 1rem;
//   color: white;
//   transition: 0.4s ease-in-out;
//   margin-bottom:10px;
//   &:hover {
//     box-shadow: ${hoverEffect};
//   }
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     width: 80%;
//   }
// `;

// const CardContent = styled.div`
//   margin: 0.2rem;
// `;

// // const Chart = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   svg {
// //     height: 4rem;
// //     width: 4rem;
// //   }
// // `;

// const ProgressText = styled.h3`
//   text-align: left;
//   font-weight: normal;
//   padding: 0px 0;
// `;
// export default InProgress;