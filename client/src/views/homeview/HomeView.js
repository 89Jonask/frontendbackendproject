import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../shared/apis/ToDoAPI";

export const HomeView = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUsers();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Username</th>
              <th>Actissson</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user._id}>
                <td>{user.text}</td>
                <td>{user.username}</td>
                <td>
                  <Link to={`/edituser/${user._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
