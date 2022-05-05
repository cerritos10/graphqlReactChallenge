import {gql, useQuery} from '@apollo/client'
import { User } from './User';



const USERS = gql`
query{
    users{
      id
      fullName
      email
      type
      createdAt
      updatedAt
      avatar
    }
  }
`;

function Confi(){
    const {data,error,loading}  = useQuery(USERS)
    if (error) return <span>{error}</span>
    return(
        <div>
            {loading
                ?<span>Loading....</span>
                :<User user={data?.users} /> 

                
            }
        </div>
    )
    }
    
    export default Confi