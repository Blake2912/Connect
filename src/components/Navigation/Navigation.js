import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { GiBee } from 'react-icons/gi'
import './Navigation.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export const Navigation = () => (
  <Navbar expand="lg" sticky="top" className='color_nav'>
    <div className='navbar_brand'>
        <Navbar.Brand href="/">
          <GiBee className='brand_img'/>
          <span className='brand_name_txt'>Connect</span>
        </Navbar.Brand>
    </div>
    <div className='navbar_components'>
      <Nav.Link href="/info" className='btn'>Learn More...</Nav.Link>
      <Nav.Link href="/help" className='btn'>Help</Nav.Link>
    </div>
  </Navbar>
  );