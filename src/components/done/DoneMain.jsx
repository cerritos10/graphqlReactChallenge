import React from "react";
import {gql, useQuery} from '@apollo/client'
import Done from "./Done"


const TASKS_DONE = gql`
query{
  tasks(input:{
    assigneeId:"8cf8158f-16ea-4bf8-86be-767104709727",
    status:DONE
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

function DoneMain(){
    const {data,error,loading}  = useQuery(TASKS_DONE)
  if (error) return <span >{error}</span>
  return (
    <div className="ColumnWorking">
    <div className="Status">Done (3)</div>
    {
      loading
      ?<span className="load" >Loading....</span>
      : <div className="card">
          <Done dn={data?.tasks} /> 
      </div>
    }
  </div>
  );

}

export default DoneMain;