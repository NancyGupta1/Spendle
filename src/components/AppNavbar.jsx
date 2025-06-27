import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const AppNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="shadow-sm py-2" bg={theme} data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold">💰 Spendle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#summary">Summary</Nav.Link>
            <Nav.Link href="#chart">Overview</Nav.Link>
            <Nav.Link href="#add">Add</Nav.Link>
          </Nav>
          <Button variant={theme === 'dark' ? 'light' : 'dark'} onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
