import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, HttpLink, InMemoryCache, gql} from '@apollo/client'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://syn-api-prod.herokuapp.com/graphql'
  })
})

const query = gql`
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

try {
  
client.query({ query })
.then(res => {
  console.log(res.data)
})
} catch (error) {
  console.error(error)
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals