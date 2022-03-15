import React from "react";
import Footer from "../components/UI/Footer";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Grid, Typography, Box, Chip, Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Cover from "../Images/react.jpg";
function Tagspage() {
  const [loading, setLoading] = useState(true);
  const [tagsposts, setTagsposts] = useState([]);
  const uri = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(uri)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((response) => {
        setTagsposts(response);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <h1 className="update">
        #React
      </h1>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="postdisplay">
          <Grid container spacing={3}>
            {tagsposts.slice(0, 15).map((post) => (
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
                  className="postbody"
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
      )}
      <Footer />
    </div>
  );
}

export default Tagspage;
