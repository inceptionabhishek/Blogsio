import React from "react";
import { useState, useEffect } from "react";

import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Cover from "../../Images/cover.jpg";
const url = "https://jsonplaceholder.typicode.com/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((response) => {
        setPosts(response);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);
  if (error) return <h1>{error}</h1>;
  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          <h1 className="heading2">
            <span> Recent Posts 👋</span>
          </h1>
          <div className="postdisplay">
            <Grid container spacing={3}>
              {posts.slice(0, 15).map((post) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={post.id}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "90%",
                      display: "inline-block",
                      p: 1,
                      mx: 1,
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "grey.100",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                      border: "1px solid",
                      borderColor: (theme) =>
                        theme.palette.mode === "dark" ? "grey.800" : "grey.300",
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
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
