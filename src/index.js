import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
});



const authLink =  setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNjQ3ODEyZjgyMzIwIiwicHJvamVjdElkIjoiMDU1MDAyYzUtMGM4ZC00OTIyLThmZTktNjhkMDFhNWVmNDZiIiwiZnVsbE5hbWUiOiJNaWx0b24gVXJpZWwgQ2Vycml0b3MgRXNwaW5vIiwiZW1haWwiOiJtdS4xMGNlcnJpdG9zQGdtYWlsLmNvbSIsImlhdCI6MTY1MTE4NDIwMH0.gF18e4Yw-PDkQvbQeSabLtA6wcFyaoyKqHn2Je2QfrE';
  return {
    headers: {
      ...headers,
      Authorization:`Bearer ${token}`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// const query = gql`
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

// try {
//   client.query({ query })
//     .then(res => {
//       console.log(res.data)
//     })
// } catch (error) {
//   console.error(error)
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals