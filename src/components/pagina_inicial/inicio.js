import React, { Component } from 'react';
//import { form } from 'semantic-ui-react';
//import { Container, Form} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import Menu from '../menu/menu';
import { Container, Row, Col, Nav} from 'react-bootstrap';
import './style.scss';
import { Code, Label, Switch } from "@blueprintjs/core";

class TabInicio extends Component{
	constructor(props){
		super(props);
	}
	alteraAba =(pag)=>{
		if(pag === 1){
			document.getElementById('cadastro').style.display = 'block';
			document.getElementById('usuario').style.display = 'none';
		}
		else if(pag === 2){
			document.getElementById('cadastro').style.display = 'none';
			document.getElementById('usuario').style.display = 'block';
		}
	}
	render(){
		return(
			<>
				<Nav variant="tabs" defaultActiveKey="cadastro">
				  <Nav.Item>
					<Nav.Link eventKey="cadastro" onClick={()=>this.alteraAba(1)}>Cadastro</Nav.Link>
				  </Nav.Item>
				  <Nav.Item>
					<Nav.Link eventKey="usuario" onClick={()=>this.alteraAba(2)}>Usuário</Nav.Link>
				  </Nav.Item>
				  
				</Nav>
			</>
		)
	}
}

class Formulario extends Component{
	constructor(props){
		super(props);
		this.state = {
			nome: '',
			ultimo_nome: '',
		};

		this.handleChangeNome = this.handleChangeNome.bind(this);
		this.handleChangeUltimoNome = this.handleChangeUltimoNome.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		/*PARA FAZER O FOCUS ------------------------------------------ */
		this.textInput = null;

		this.setTextInputRef = element => {
		  this.textInput = element;
		};

		this.focusTextInput = () => {
		  // Foca o input de texto usando a API DOM diretamente
		  if (this.textInput) this.textInput.focus();
		};
		/*------------------------------------------------------------- */
	}
	
	  handleChangeNome(event) {
		this.setState({nome: event.target.value});
	  }
	  handleChangeUltimoNome(event) {
		this.setState({ultimo_nome: event.target.value});
	  }

	  handleSubmit(event){
		if(!this.state.nome)
		{
			alert('Preencha o nome');
			//$('#first-name').focus;
			this.focusTextInput();
			event.preventDefault(); //NÃO ATIVA O ON CLICK
			
		}else{  
			//alert('Um nome foi enviado: ' + this.state.nome);
			//event.preventDefault();
		}
	  }
	   componentDidMount() {
		// auto-foca o input na montagem
		this.focusTextInput();
	  }
	render(){
			return(
			<div>
				<br/>
				{/*<form  action="/list" className="ui form" onSubmit={this.handleSubmit}>
				  
				  
				  <div className="field">
					<div className="form-group">
						<input type="text" name="first-name" id="first-name" ref={this.setTextInputRef} defaultValue={this.state.nome} onChange={this.handleChangeNome} className="form-control" />
						<label className="form-control-placeholder" HTMLfor="name">Name</label>
						
					</div>
				  </div>
				  <div className="field">
					<label>Last Name</label>
					<input type="text" name="last-name" defaultValue={this.state.ultimo_nome} onChange={this.handleChangeUltimoNome} placeholder="Last Name"/>
				  </div>
				  <div className="field">
					<div className="label-float">
						<input type="text" placeholder=" " />
						<label>Telefone</label>
					</div>
				  </div>
				  <br/><br/>
				
				  
					<button className="ui button">Submit</button>
				</form>*/}
				<TabInicio/>
				<div id="cadastro">
				<Row className="show-grid my-2">
					<Col>
						<div className="label-float">
						<div className="sub">
							<input type="text"  placeholder=" " />
							<label>Nome</label>		
							<small>Preencha o nome completo</small>		
						</div>
						</div>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col  xs={12} md={8}>
						<div className="label-float">
							<input type="text"  placeholder=" " />
							<label>Email</label>
						</div>
					</Col>
					<Col  xs={12} md={4}>
						<div className="label-float">
							<input type="text"  placeholder=" " />
							<label>Telefone</label>
						</div>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text"  placeholder=" " />
							<label>Nascimento</label>
						</div>
					</Col>
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text"  placeholder=" " />
							<label>CPF</label>
						</div>
					</Col>
					{/*<Col xs={12} md={2}>
						<div className="label-float">
							<Label>Ativo</Label>
							<Switch {...this.state} innerLabelChecked="on" innerLabel="off" />
						</div>
					</Col>*/}
					
				</Row>	
			</div>
			
			<div id='usuario' style={{display: 'none'}}>usuario</div>
			</div>
			)
	}
}

class Inicio extends Component{
		render(){
			return(
				<>
				<Menu/>
				<div style={{background:'#495e9620', minHeight: '600px'}}>
				<Container style={{background:'#fff', minHeight: '600px'}}>
					<Formulario />
				</Container>
				</div>
				</>
			
			)
		}
}
export default Inicio;