import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Footer from "../UI/Footer";
const url = "https://jsonplaceholder.typicode.com/users";

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFollowers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="Heading">Followers :-</h1>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {followers.map((follower) => (
                <div className="col-md-4" key={follower.id}>
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src="https://media.giphy.com/media/ETY5vYoZjLD6Ibf37u/giphy.gif"
                          alt={follower.name}
                          className="Avatar"
                          width="100px"
                        />
                      </div>
                      <div className="col-md-8">
                        <h4>{follower.name}</h4>
                        <p>{follower.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Followers;
