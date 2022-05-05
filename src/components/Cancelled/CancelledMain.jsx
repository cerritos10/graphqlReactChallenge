import React from "react";
import {gql, useQuery} from '@apollo/client'
import Cancelled from "./Cancelled"

const TASKS_CANCELLED = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:CANCELLED
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

function CancelledMain(){
    const {data,error,loading}  = useQuery(TASKS_CANCELLED)
  if (error) return <span style='color: red'>{error}</span>
  return (
    <div className="ColumnWorking">
    <div className="Status">Cancelled (3)</div>
    {
      loading
      ?<span className="load" >Loading....</span>
      : <div className="card">
          <Cancelled can={data?.tasks} /> 
      </div>
    }
  </div>
  );

}

export default CancelledMain;