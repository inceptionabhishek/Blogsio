import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function LoggedNavbar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/" className="links">
            Blogsio
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="ml-auto" navbarScroll>
              <Nav className="me-auto">
                <Link to="/profile" className="links">
                  profile
                </Link>
                <Link to="/totalusers" className="links">
                  Users
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LoggedNavbar;
