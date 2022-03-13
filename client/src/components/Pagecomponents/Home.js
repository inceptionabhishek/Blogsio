import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../Pagecomponents/Pagination";
import Post from "../Pagecomponents/Post";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
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

      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={4}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}

export default Home;
