import { getToken } from '../../helpers/';
import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const authLink = setContext(async (_, { headers, ...context }) => {
  //TODO: ADD REFRESH TOKEN LOGIC HERE
  return {
    headers: {
      ...headers,
      authorization: `${getToken() ? `Bearer ${getToken()}` : ''}`
    },
    ...context
  };
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL //TODO: ADD API URL HERE
});

const link = ApolloLink.from([authLink, httpLink]);

const setClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
    headers: {
      authorization: `${getToken() ? `Bearer ${getToken()}` : ''}`
    }
  });
  return client;
};

export default setClient;
