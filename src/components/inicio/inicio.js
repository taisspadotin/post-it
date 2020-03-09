import React, {Component} from 'react';
//import {Button, Box, Typography} from '@material-ui/core';
import {Container, Row, Col, Navbar, NavDropdown, Form, Button, Nav, FormControl} from 'react-bootstrap'; //Importações bootstrap
import './style.scss';
import { Card, Icon } from 'semantic-ui-react'

var exibepag = 0; 
window.onscroll = function (){ //função  executada quando a pagina for rolada
			 //pegando o tamanho da pagina
			 //console.log(window.innerHeight);
			 //console.log(window.pageYOffset);
			 if(exibepag == 0){
				if(window.pageYOffset > 10 && window.pageYOffset < 200){
					//alert('surgir');
					document.getElementById('navegacao_inicial').style.background = '#b8cfdf';
					exibepag = 1;
				}
			 }
			 else{
				 if(window.pageYOffset == 0)//se a pessoa voltou para o começo
				 {
					 document.getElementById('navegacao_inicial').style.background = 'none';
					 exibepag = 0;
				 }
			 }
			 //fazer para quando da f5
			 
			};


class CardClasse extends Component{
	Constructor(props){
		
	}
	render(){
	
		return(
			<Card className="cards">
				<Card.Content header={this.props.titulo} />
				<Card.Content description={this.props.descricao} />
					{/*<Card.Content extra>
				  <Icon name="comment" />Friends
					</Card.Content>*/}
			  </Card>
		)
	}
}
class Inferior extends Component{
	Constructor(props){
		
	}
	render(){
		return(
			<div className="inferior">
				<Container>
					<Row className="show-grid">
						<Col xs={12} md={12} className="about">
							<h2>About</h2>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={12} md={4}>
							<div className="d-flex justify-content-center">
								<CardClasse titulo="Sobre Mim" descricao="Amy is a violinist with 2 years experience in the wedding industry She enjoys the outdoors and currently resides in upstate New York."/>
							</div>
						</Col>	
						<Col xs={12} md={4}>
							<div className="d-flex justify-content-center">
								<CardClasse titulo="Historia" descricao="Lorem ipsum turpis morbi vel porttitor donec lacinia ullamcorper phasellus nisl, cubilia lobortis taciti tristique eros mi curabitur himenaeos orci ut quis, scelerisque proin sagittis eget morbi odio curae auctor aliquam"/>
							</div>	
						</Col>
						<Col xs={12} md={4}>
							<div className="d-flex justify-content-center">
								<CardClasse titulo="Como funciona" descricao="Aliquet fames fringilla luctus id aliquet mollis praesent lectus viverra arcu purus donec porttitor taciti, cursus eu eros ultricies volutpat ullamcorper"/>
							</div>	
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}	

class SegundoConteudo extends Component{
	render(){
		return(
			<div className="conteudo2">
				<Row className="show-grid">
						<Col xs={12} md={6}>
							
						</Col>	
						<Col xs={12} md={6} className="lateralzinha">
							<div className="d-flex justify-content-center">
								<div className="laranjinha">
									<h2>Metus conubia pulvinar</h2>
									<p>
										 in rutrum tortor ut venenatis himenaeos aenean tristique eros feugiat, ut mattis sit metus blandit in gravida interdum. luctus facilisis sem vivamus dictum aenean per fermentum pulvinar, vivamus pretium habitasse id velit convallis duis, et dui platea viverra leo ante vel.
									</p>
								</div>	
							</div>
						</Col>
					</Row>
			</div>
		)
	}	
}

class Menu extends Component{
	Constructor(props){
		//super(props);
		
	}
	componentDidMount(){
		

	}
	render(){
		return(
		<>
			<Navbar id="navegacao_inicial" className="navegacao_inicial" expand="lg" >
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav" style={{height: '40px', display: 'flex !important', alignItems: 'center', justifyContent: 'center'}}>
				<Nav className="mr-auto" style={{ margin: '0', position: 'absolute', width:'100%'}}>
					  <Nav.Link href="/" title="Cadastrar"><i className="archive icon"></i> History</Nav.Link>
					  <Nav.Link href="/cadastro" title="Cadastrar"><i className="pencil alternate icon"></i> Cadastrar</Nav.Link>
					  <Nav.Link href="/pesquisar" title="Pesquisar"><i className="search icon"></i> Buscar</Nav.Link>
					  <Nav.Link href="/adicionar" title="Adiconar"><i className="folder open outline icon"></i> Adicionar</Nav.Link>
					  <Nav.Link href="/desenhar" title="Desenhar"><i className="heart outline icon"></i> Desenhar</Nav.Link>
					  
				</Nav>
				
			  </Navbar.Collapse>
			 </Navbar> 
		</>	  
		)
	}
}
class Rodape extends Component{
	render(){
		return(
			<>
			<div className="rodape">
				<br/>
				<h3>©Copyright 2020</h3>
			</div>
			</>
		)
	}
}

class TelaInicial extends Component{
	render(){
		return(
		<>
			<div className="corpo_inicio">
				<Menu/>
				<br/>
				<div className="apresentacao">
					<h2 >Seja bem vindo.</h2>
				</div>
			</div>
				{/*<div className="conteudo_home">*/}
				<Inferior/>
				{/*</div>	*/}
				<SegundoConteudo/>
				<Rodape/>
			</>
		)
	}
}
export default TelaInicial;