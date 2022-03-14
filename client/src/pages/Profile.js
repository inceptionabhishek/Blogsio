import React from "react";
import { Spinner } from "react-bootstrap";
import Profiledata from "../helpers/Profiledata";
import CardComponent from "../components/Pagecomponents/CardComponent";
import { useState, useEffect } from "react";
function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const uri = "https://randomuser.me/api/?seed=fea8be3e64777240";
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  });
  return (
    <div className="cardprofile">
      <h1>Profile</h1>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <CardComponent
              key={index}
              firstname={item.name.first}
              lastname={item.name.last}
              email={item.email}
              location={item.location.city}
              picture={item.picture.medium}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;
