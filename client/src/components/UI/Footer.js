import React from "react";
import logo from "../../Images/logo.png";
function Footer() {
  return (
    <>
      <div className="brand">
        <img src={logo} alt="logo" className="footer-logo" />
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

      <div class="footer"> Made with ♥ ~ Abhishek </div>
    </>
  );
}

export default Footer;
