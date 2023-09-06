import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  let users = []
  return (
    <div>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
