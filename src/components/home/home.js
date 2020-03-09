import React, {Component} from 'react';
import './style.css';
import './style.scss';
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';

class Sobre extends Component{
	render(){
		return(
			<>
				<div className="introducao" style={{height: '555px'}}>
					<br/>
					<h1>Lorem ipsum dolor</h1>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
					in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat
					auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem.</h3>
					<br/>
					
				</div>
			</>
		)
	}
}
class Origem extends Component{
	render(){
		return(
			<div className="origem" style={{height: '555px'}}>
				<h1>Aliquam porta eros</h1>
				<h3>Maecenas tempus eros ut diam ullamcorper id dictum libero
tempor. Donec quis augue quis magna condimentum lobortis. Quisque imperdiet ipsum vel
magna viverra rutrum. Cras viverra molestie urna, vitae vestibulum turpis varius id.</h3>
			</div>
		)
	}
}
export default class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			origem: false,
		};
		
		this.Ancoragem 	= null;
		
		this.setRefSobre = element => {
			//console.log(element);
		  this.Ancoragem = element;
		  //console.log(this.Ancoragem);
		};
		
		
	
	}
	origem_rol = () =>{
		if(this.state.origem == false){
			this.setState({origem: true});
		} else{
			this.setState({origem: false});
		}
	}
	
	
	render(){
		
		
		var seta;
		if(this.state.origem == false){
			seta = <a href="#anchorSobre" onClick={this.origem_rol}>
				<i className="angle down icon" style={{fontSize: '2.2em'}}></i>
			</a>;
		}
		if(this.state.origem == true){ 
		seta = <a href="#anchor" onClick={this.origem_rol}>
				<i className="angle up icon" style={{fontSize: '2.2em'}}></i>
			</a>;
		}	
		
		return(
			<>
			<Menu/>
				<Container>
				<div className="home">
					<div ref={this.setRefSobre}>
					<a  name="anchorSobre" >
						<Sobre />
					</a>
					</div>
					{seta}
					
					<a name="anchor">
						<Origem />
					</a>
				</div>	
				</Container>
			</>
		)
	}
}
