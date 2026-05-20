import React, { useEffect, useState } from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/users?page=${currentPage}&limit=10`
    );

    // console.log(response.data.users);
    setUsers(response.data.users);

    setTotalPages(response.data.totalPages);
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div className="max-2-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Pagination</h1>

      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
