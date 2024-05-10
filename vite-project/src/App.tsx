import React, { ReactNode, createContext, useState } from 'react';
import './App.css';
import Reducer from './components/Reducer';
import Variable from './components/Variable';
import Users from './components/Users';
import NewUser from './components/NewUser';

type USER = {
  id: number;
  name: string;
};
interface UserContextType {
  user: USER[];
  setUser: React.Dispatch<React.SetStateAction<USER[]>>;
}
// const demo = [{ id: 1, name: 'minhaj' }];
export const UserContext = createContext<UserContextType>({
  user: [],
  setUser: () => {},
});
function App() {
  const [user, setUser] = useState<USER[]>([]);
  return (
    <>
      {/* Uncomment if needed */}
      {/* <Variable /> */}
      {/* <Reducer /> */}
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Theme />
      </ThemeContext.Provider> */}
      <UserContext.Provider value={{ user, setUser }}>
        <NewUser />
        <Users />
      </UserContext.Provider>
    </>
  );
}

export default App;
