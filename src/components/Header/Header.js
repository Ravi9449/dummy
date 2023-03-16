import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import Tracker from "../Tracker/Tracker";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Expense from "../Expense/Expense";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("email");
    navigate("/login");
  }
  return (
    <div>
      <Navbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "1.5rem", gap: "1rem" }}>
            EasyTracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto"
              style={{ fontSize: "1.3rem", gap: "2rem" }}
            >
              <Nav.Link href="/" style={{ color: "black" }}>
                Dashboard
              </Nav.Link>
              <Nav.Link href="/history" style={{ color: "black" }}>
                History
              </Nav.Link>
              <Nav.Link href="/tracker" style={{ color: "black" }}>
                Tracker
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                alignRight
                title="Profile"
                id="collasible-nav-dropdown"
                style={{ fontSize: "1.3rem", gap: "1rem" }}
              >
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </div>
  );
};

export default Header;
