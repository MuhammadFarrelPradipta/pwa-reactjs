import React, { useState, useEffect } from "react";
function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
  }, []);
  return (
    <div>
      <h1>User Component</h1>
    </div>
  );
}

export default Users;
