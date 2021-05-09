import { createContext, Dispatch, SetStateAction } from 'react';

interface contextType {
  loggedIn: Boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<contextType>({ loggedIn: false, setLoggedIn: () => {} });

export default AppContext;
