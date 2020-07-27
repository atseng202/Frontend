//TODO centre search bar, get search icon button within search bar, change navbar colour
//import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";
//import Router from 'next/router';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/index" passHref>
        <Navbar.Brand href="/">Youtubenlp</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="mr-auto"></div>
        <Form inline>
          <FormControl type="text" placeholder="video url" />
          <Button variant="outline-success">
            <i class="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>
        <NavDropdown title="filter" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">option 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">option 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">option 3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            seperated option
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
