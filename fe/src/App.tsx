import React from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

const App: React.FC = () => {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
};

export default App;
