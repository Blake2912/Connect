import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './Navigation.css';


export const Navigation = () => (
  <div className='navbar_main'>
    <div className='navbar_brand'>
        <Navbar.Brand href="/">
          <img src='./logo192.png' className='brand_img'/>
        </Navbar.Brand>
    </div>
    <div className='brand_name'>
      <Nav.Link href="/" className='brand_name_txt'>Connect</Nav.Link>
    </div>
    <div className='navbar_components'>
      <Nav.Link href="/info" className='btn'>Learn More...</Nav.Link>
      <Nav.Link href="/help" className='btn'>Help</Nav.Link>
    </div>
  </div>
  );