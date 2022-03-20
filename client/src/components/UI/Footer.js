import React from "react";
import { Stack } from "@mui/material";
import logo from "../../Images/logo.png";
function Footer() {
  return (
    <>
      <div className="brand">
        <img src={logo} alt="logo" className="footer-logo" width="100px" />
      </div>
      <div className="brand">
        <img
          width="50px"
          alt="GIF"
          src="https://media.giphy.com/media/hvE0PhVAnGQAo/giphy.gif"
        />
        <img
          width="50px"
          alt="GIF"
          src="https://media.giphy.com/media/l378ryVoDmMwKoSt2/giphy.gif"
        />
        <img
          width="50px"
          alt="GIF"
          src="https://media.giphy.com/media/3ov9jOGBxophqYi0hO/giphy.gif"
        />
        <img
          width="50px"
          alt="GIF"
          src="https://media.giphy.com/media/l378jvVVbvhjLojBK/giphy.gif"
        />
      </div>
      <div class="footer">
        {" "}
        Made with ♥ ~ Abhishek
        <Stack direction="row" justify="center" align="center">
          <a href="https://github.com/inceptionabhishek" target="_blank">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-a9a8a817b/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </Stack>
      </div>
    </>
  );
}

export default Footer;
