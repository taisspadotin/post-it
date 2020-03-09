import React, { Component } from 'react';
//import { form } from 'semantic-ui-react';
//import { Container, Form} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';


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
				<form  action="/list" className="ui form" onSubmit={this.handleSubmit}>
				  <div className="field">
					<label>First Name</label>
					<input type="text" name="first-name" id="first-name" ref={this.setTextInputRef} defaultValue={this.state.nome} onChange={this.handleChangeNome} placeholder="First Name"/>
				  </div>
				  <div className="field">
					<label>Last Name</label>
					<input type="text" name="last-name" defaultValue={this.state.ultimo_nome} onChange={this.handleChangeUltimoNome} placeholder="Last Name"/>
				  </div>
				  {/*<Link to="/list">*/}
					<button className="ui button">Submit</button>
				  {/*</Link>*/}
				</form>
			</div>
			)
	}
}

class Inicio extends Component{
		render(){
			return(
				<>
				<Menu/>
				<Container>
					<Formulario />
				</Container>
				</>
			
			)
		}
}
export default Inicio;