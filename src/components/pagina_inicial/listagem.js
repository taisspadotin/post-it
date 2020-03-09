import React, { Component } from 'react';
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';

class BotaoExcluir extends Component{
	constructor(props){
	super(props);	
	//console.log(this.props.nomee);
	}
	render(){
		return(
			<button className="ui button" onClick={this.props.onClick} style={{width:'50px', marginLeft: '5px', background: '#9e3e34', color:'#fff'}}>
				<i className="trash alternate icon"></i>
			</button>
		)
	}
	
}

class Listagem extends Component{
	constructor(props){
	super(props);	
		this.state ={
			nome: '',
			ultimo_nome: '',
		};
		this.NomeInput 			= null;
		this.UltimoNomeInput 	= null;
		
		this.setRefNome = element => {
		  this.NomeInput = element;
		};
		
		this.setUltimoNomeInput = element => {
			this.UltimoNomeInput = element;
		};
	}
	
	componentDidMount() {
		var url   = this.props.location.search.replace("?", "");
		var items = url.split("&");
		var nome = items[0].split("=")[1];
		var ultimo_nome = items[1].split("=")[1];
		
		this.setState({nome, ultimo_nome});
	}
	
	excluir = (op, event ) =>{
		if(op == 1)
		{
			//console.log(event);
			this.setState({nome: ''});
			this.NomeInput.value = '';
			//console.log(this.NomeInput.value);
		}
		if(op == 2)
		{
			this.setState({ultimo_nome: ''});
			this.UltimoNomeInput.value = '';
			
		}
	}
	
	render(){
		return(
			<>
			<Menu/>
				<Container>
				<div className="ui form">
					<div className="field">
						<label>First Name</label>
						<input type="text" defaultValue={this.state.nome} ref={this.setRefNome} style={{width:'300px'}}/>
						<BotaoExcluir onClick={this.excluir.bind(this, '1')}/>
						
					</div>
					<div className="field">
						<label>Last Name</label>
						<input type="text" defaultValue={this.state.ultimo_nome} ref={this.setUltimoNomeInput} style={{width:'300px'}}/>
						<BotaoExcluir onClick={this.excluir.bind(this, '2')}/>
						
					</div>
				</div>
				</Container>
			</>	
		)
	}
}
export default Listagem;