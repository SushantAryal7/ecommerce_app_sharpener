import React, { Fragment } from 'react'
import './Navbar.module.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import ProductList from '../ProductList'
import Cart from '../cart/Cart'


function Navbarr() {
  return (
    <Fragment>
      <Navbar bg="dark" data-bs-theme="dark" style={{ position:'sticky',
      top:'0',
      width:'100%',
      zIndex:'100'}}>
        <Container>
          <Nav className="me-auto" >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Button>Cart</Button>
        </Container>
      </Navbar>
      <div style={{ backgroundColor:'gray' , height:'20vh'}}>
        <h1 style={{textAlign:'center', fontWeight:'700', fontSize:'50px', color:'white'}}>The Generics</h1>
      </div>
      
<ProductList />
<Cart />


    </Fragment>
  )
}

export default Navbarr