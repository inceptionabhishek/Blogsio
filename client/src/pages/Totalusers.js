import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/UI/Footer";

function Totalusers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className="update"> Bloggers..</h1>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        </>
      ) : (
        <>
          {users.map((user, index) => (
            <Link to="/profile" className="links2">
              <div className="card" key={index}>
                <img
                  src="https://www.w3schools.com/w3images/team2.jpg"
                  alt="John"
                  className="avatar"
                ></img>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </div>
            </Link>
          ))}
        </>
      )}
      <Footer />
    </div>
  );
}

export default Totalusers;
