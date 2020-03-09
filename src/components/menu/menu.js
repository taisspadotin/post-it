import React, { Component } from 'react';
import { Navbar, NavDropdown, Form, Button, Nav, FormControl} from 'react-bootstrap'; //Importações bootstrap
import {Link} from 'react-router-dom';
import './style.css';

class Menu extends Component{
	render(){
		
	return(
		<div>
			<Navbar  expand="lg" >
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <img src="https://cdn.pixabay.com/photo/2012/04/12/11/50/rainbow-29668_960_720.png"  height="42" width="80"/>
			  <Navbar.Collapse id="basic-navbar-nav" style={{height: '40px',display: 'flex !important', alignItems: 'center', justifyContent: 'center'}}>
				<Nav className="mr-auto" style={{ margin: '0', position: 'absolute'}}>
					  <Nav.Link href="/" title="Home"><i className="home icon"></i></Nav.Link>
					  <Nav.Link href="/cadastro" title="Cadastrar"><i className="pencil alternate icon"></i></Nav.Link>
					  <Nav.Link href="/pesquisar" title="Pesquisar"><i className="search icon"></i></Nav.Link>
					  <Nav.Link href="/adicionar" title="Adiconar"><i className="folder open outline icon"></i></Nav.Link>
					  <Nav.Link href="/desenhar" title="Desenhar"><i className="heart outline icon"></i></Nav.Link>
					  {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					  </NavDropdown>*/}
				</Nav>
				
			  </Navbar.Collapse>
			</Navbar>
		</div>
	)
	}
}
export default Menu;