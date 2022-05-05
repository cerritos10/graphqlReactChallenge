import React from "react";
import InProgress from '../InProgress/InProgress'
import Navbar from "../Nav/Navbar";
import CancelledMain from "../Cancelled/CancelledMain";
import "./MainContent.css";
import {gql, useQuery} from '@apollo/client'
import DoneMain from "../done/DoneMain";
import BacklogMain from "../Backlog/BacklogMain"

const TASKS_INPROGRESS = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:IN_PROGRESS
  }){
    id
    assignee{
      id
    }
    name
    tags
    dueDate
    pointEstimate
    creator{
      avatar
    } 
  }
  }
`;

function MainContent() {
  const {data,error,loading}  = useQuery(TASKS_INPROGRESS)
  // const valor = (Object.keys(data.tasks).length)

  if (error) return <span>{error}</span>
  return (
    
    <div className="Container">
      <Navbar/>
      <div className="SubContainer">
        <div className="Section">
          <div className="ColumnWorking">
            <div className="Status">In Progress </div>
            {
              loading
              ?<span className="load" >Loading....</span>
              : <div className="card">
                  <InProgress task={data?.tasks} /> 
              </div>
            }
          </div>
          <BacklogMain/>
          <CancelledMain/>
          <DoneMain/>
        </div>
      </div>

      <div className="SectionAll">
        <div className="SectionTask">

        </div>
      </div>
    </div>

  );
}

export default MainContent;