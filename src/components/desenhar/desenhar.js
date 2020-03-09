import React, {Component} from 'react';
import './style.scss';
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';

class Desenhar extends Component{
		constructor(props){
			super(props);
			this.quadro = null;
			
			this.setRefQuadro = element =>{
				this.quadro = element;
				console.log(this.quadro);
			}
		}
		componentDidMount(){
			
			var largura = 900;
			var altura = 300;
			 
			//var quadro = document.getElementById("quadro");
			this.quadro.setAttribute("width", largura);
			this.quadro.setAttribute("height", altura);
			 
			var ctx = this.quadro.getContext("2d");
			ctx.strokeStyle = '#f00';
			var desenhando = false;
			this.quadro.onmousedown = function (evt) {
				ctx.moveTo(evt.clientX, evt.clientY);
				desenhando = true;
			}
			this.quadro.onmouseup = function () {
				desenhando = false;                
			}
			this.quadro.onmousemove = function (evt) {
				if (desenhando) {
					ctx.lineTo(evt.clientX, evt.clientY);
					ctx.stroke();
				}
			}
		}
		alteracor =(op) =>{
			var ctx = this.quadro.getContext("2d");
			
			if(op == 1){
				ctx.strokeStyle = '#ff0000';
			}
			else if(op == 2){
				ctx.strokeStyle = '#0000ff';
			}
			else if(op == 3){
				ctx.strokeStyle = '#008000';
			}
			else if(op == 4){
				ctx.strokeStyle = '#000000';
				/*Desenhando texto*/
				ctx.font = "30px Arial";
				ctx.fillText("Hello World", 10, 50); 
			}
			else if(op == 5){
				ctx.strokeStyle = '#ffffff';
				/*circulo*/
				ctx.beginPath();
				ctx.arc(95, 50, 40, 0, 2 * Math.PI);
				ctx.stroke(); 
			}
			else if(op == 6){
				ctx.strokeStyle = '#ffc0cb';
				
				ctx.moveTo(0, 0);
				ctx.lineTo(200, 100);
				ctx.stroke(); 
			}
			else if(op == 'tx'){
				ctx.clearRect(0, 0, this.quadro.width, this.quadro.height);
				
			}
			
		}
		render(){
		
		
	
		return(
			<>
			<Menu />
			<Container>
				<div className="cores" >
					<div className="c1" onClick={()=>this.alteracor(1)}></div>
					<div className="c2" onClick={()=>this.alteracor(2)}></div>
					<div className="c3" onClick={()=>this.alteracor(3)}></div>
					<div className="c4" onClick={()=>this.alteracor(4)}></div>
					<div className="c5" onClick={()=>this.alteracor(5)}></div>
					<div className="c6" onClick={()=>this.alteracor(6)}></div>
					<div className="lixo" onClick={()=>this.alteracor('tx')}>
						<i className="trash icon" style={{marginLeft:'4px', marginBottom: '2px'}}></i>
					</div>
					
				</div>
				<canvas className="painel" ref={this.setRefQuadro}></canvas>
			</Container>
			</>
		)
	}
}

export default Desenhar;