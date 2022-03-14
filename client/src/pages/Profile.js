import React from "react";
import { Spinner } from "react-bootstrap";
import Profiledata from "../helpers/Profiledata";
import CardComponent from "../components/Pagecomponents/CardComponent";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Cover from "../Images/cover.jpg";
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
function Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const uri = "https://randomuser.me/api/?seed=fea8be3e64777240";
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  });
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((response) => {
        setPosts(response);
        setLoading2(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
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
                picture={item.picture.large}
                followers={item.followers}
                following={item.following}
              />
            ))}
          </div>
        )}
        <h1>Your Posts</h1>
        <div className="YourPosts">
          <br />
          <br />
          {loading ? (
            <div className="spinner">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="postdisplay">
              <Grid container spacing={3}>
                {posts.slice(0, 6).map((post) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={post.id}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "90%",
                        display: "inline-block",
                        p: 1,
                        mx: 1,
                        bgcolor: (theme) =>
                          theme.palette.mode === "dark"
                            ? "#101010"
                            : "grey.100",
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.300"
                            : "grey.800",
                        border: "1px solid",
                        borderColor: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.800"
                            : "grey.300",
                        borderRadius: 2,
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      p={2}
                      width="90%"
                      m={1}
                      bgcolor="background.paper"
                      boxShadow={3}
                    >
                      <img src={Cover} alt="post" className="blogcover" />
                      <Typography variant="h5">{post.title}</Typography>
                      <Typography
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}
                        variant="body1"
                      >
                        {post.body}
                      </Typography>
                      <Link to="/view/blog">Read more..</Link>
                      <Stack direction="row" spacing={1}>
                        <Chip label="React" />
                        <Chip label="Node" />
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Chip label="MongoDB" />
                        <Chip label="Express" />
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="author"
                          src="https://randomuser.me/api/portraits/thumb/women/0.jpg"
                        />
                        {"   "}
                        <Stack direction="column" spacing={0}>
                          <Typography variant="h8">Abhishek kumar</Typography>
                          <Typography variant="h8">14-03-2022</Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Link to="/update/blog">
                          <UpdateIcon />
                        </Link>
                        <DeleteIcon />
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
