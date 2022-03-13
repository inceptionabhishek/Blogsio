import React from "react";
import { useState, useEffect } from "react";

import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Cover from "../../Images/cover.jpg";
const url = "https://jsonplaceholder.typicode.com/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <h1 className="heading2">
        <span> Recent Posts 👋</span>
      </h1>
      <div className="postdisplay">
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                p={2}
                m={1}
                bgcolor="background.paper"
                boxShadow={3}
              >
                <img src={Cover} alt="post" className="blogcover" />
                <Typography variant="h5">{post.title}</Typography>
                <Typography className="post-body">{post.body}</Typography>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="author"
                    src="https://randomuser.me/api/portraits/thumb/women/0.jpg"
                  />
                  
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
