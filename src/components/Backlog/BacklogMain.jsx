import React from "react";
import {gql, useQuery} from '@apollo/client'
import Backlog from "./Backlog"

const TASKS_BACKLOG = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:BACKLOG
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

function BacklogMain(){
    const {data,error,loading}  = useQuery(TASKS_BACKLOG)
  if (error) return <span style='color: red'>{error}</span>
  return (
    <div className="ColumnWorking">
    <div className="Status">Backlog </div>
    {
      loading
      ?<span className="load" >Loading....</span>
      : <div className="card">
          <Backlog bac={data?.tasks} /> 
      </div>
    }
  </div>
  );

}

export default BacklogMain;