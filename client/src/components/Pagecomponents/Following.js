import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Footer from "../UI/Footer";
const url = "https://jsonplaceholder.typicode.com/users";

function Following() {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFollowing(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="Heading">Followings :-</h1>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        </>
      ) : (
        <>
          {following.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <Avatar src="https://randomuser.me/api/portraits/men/72.jpg" />
                <h5 className="card-title">
                  <b>Name : </b>
                  {item.name}
                </h5>
                <p className="card-text">
                  <b>Email : </b>
                  {item.email}
                </p>
                <p className="card-text">
                  <b>Phone :</b>
                  {item.phone}
                </p>
                <p className="card-text">
                  <b>Website: </b>
                  {item.website}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
      <Footer />
    </div>
  );
}

export default Following;
