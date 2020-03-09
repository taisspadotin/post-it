import React ,{ Component} from 'react';
import './style.scss';
import Draggable, {DraggableCore} from 'react-draggable'; 
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';

export default class Adicionar extends Component{
	constructor(props){
		super(props);
		this.state = {
			qtd: 0,
			valores: [],
			seta: false,
			
		};
		this.tela = null;
		this.setRefTela = element =>{
			this.tela = element;
		}
		this.texto = [];
		this.setRefTexto= element =>{
			
			this.texto.push(element);
			//console.log(this.texto);
		}
		this.editar = [];
		this.setRefEditar = element =>{
			this.editar.push(element);
			
		}
		this.cabecalho = [];
		this.setRefCabecalho = element =>{
			this.cabecalho.push(element);
		}
		this.textArea = [];
		this.setRefTextArea = element =>{
			this.textArea.push(element);
		}
		//this.corpo = '';
		this.indicador = [];
	}
	telaFunction = (event) =>{
		let qtd = this.state.qtd;
		//console.log(this.state);
		qtd = parseInt(qtd) +1;
		this.setState({qtd});
	}
	handleClick =(e) =>{
		//console.log(e.target);
		let arr = {};
		arr['pos'] = e.target.id;
		arr['valor'] = e.target.value;
		
		let valores = [];
		//if((this.state.valores) != ''){
			valores.push(this.state.valores);
			
		//}
		valores.push(arr);
		this.setState({valores});
		//console.log(this.state.valores);
	}
	removeDiv = (i , op) =>{
		if(op == 1){
			this.indicador[i] = true;
			//this.setState({indicador[i]: 1});
			this.setState({seta:true});
			this.editar[i].style.display='flex';
			this.textArea[i].style.height = "50%";
		}
		if(op == 2){
			this.indicador[i] = false;
			//this.setState({indicador[i]: 2});
			this.setState({seta:false});
			this.editar[i].style.display='none';
			this.textArea[i].style.height = "80%";
		}
	}
	
	mudaFundo = (i, op) =>{
		if(op == 1){
			this.texto[i].style.background='#cafecd';
			//this.cabecalho[i].style.background='#cafe91';
		}
		if(op==2){
			this.texto[i].style.background='#bee4e7';
			//this.cabecalho[i].style.background='#bee4ff';
		}
		if(op==3){
			this.texto[i].style.background='#ffd6b8';
			//this.cabecalho[i].style.background='#ffd8c8';
		}
		if(op==4){
			this.texto[i].style.background='#e0bbe4';
			//this.cabecalho[i].style.background='#e0bbe4';
		}
		if(op==5){
			this.texto[i].style.background='#fbfcd0';
			//this.cabecalho[i].style.background='#fbfca9';
		}
		if(op==6){
			this.texto[i].style.background='#ebf4f3';
			//this.cabecalho[i].style.background='#fbf4f3';
		}
		
	}
	removeNota = (i, qtd_nova) =>{
		//console.log(this.texto[i]);
		this.texto[i].remove();
		//this.texto[i].parentNode.removeChild(this.texto[i]);
		//this.setState({qtd: qtd_nova});
		
		
	}
	
	eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

	mudaFonte =(i, op) =>{
		if(op == 1){
			this.textArea[i].style.fontFamily='Trade Winds, cursive';
		}
		else if(op == 2){
			this.textArea[i].style.fontFamily='Roboto, sans-serif';
		}
		else if(op == 3){
			this.textArea[i].style.fontFamily='Dancing Script, cursive';
		}
		else if(op == 4){
			this.textArea[i].style.fontFamily='Caveat, cursive';
		}
		else if(op == 5){
			this.textArea[i].style.fontFamily='Pacifico, cursive';
		}
		else if(op == 6){
			this.textArea[i].style.fontFamily='Righteous, cursive';
		}
	}

	render(){
	
	
	let po = this.state.qtd;
	let qtd_nova = po -1;
	let divs = [];
	let indicador = [];
		
	for(let i=0; i<po; i++){
		
		
		if(i%4 == 0){
			/*divs.push(<br />);*/
		}
		let icone;
		
		if(this.indicador[i] == false || this.indicador[i] == undefined){
			icone = <i className="angle down icon" onClick={()=>this.removeDiv(i , 1)}></i>
		}
		else if(this.indicador[i] == true){
			icone = <i className="angle up icon" onClick={()=>this.removeDiv(i , 2)}></i>
		}
		
		 divs.push(<Draggable key={i}>
					<div key={i} id={i} className="texto" draggable="true" ref={this.setRefTexto}>
						<div className="cabecalho" ref={this.setRefCabecalho}>
							{icone}
							<i className="plus icon" onClick={this.telaFunction} style={{ fontSize:'0.9em'}}></i>
							<i className="close icon" onClick={()=>this.removeNota(i, qtd_nova)} style={{marginTop: '8px'}}></i>
							
						</div>
						<div className="editar" ref={this.setRefEditar}>
							<div className="linha1">
								<div className="cor1" onClick={()=>this.mudaFundo(i , 1)}></div>
								<div className="cor2" onClick={()=>this.mudaFundo(i , 2)}></div>
								<div className="cor3" onClick={()=>this.mudaFundo(i , 3)}></div>
								<div className="cor4" onClick={()=>this.mudaFundo(i , 4)}></div>
								<div className="cor5" onClick={()=>this.mudaFundo(i , 5)}></div>
								<div className="cor6" onClick={()=>this.mudaFundo(i , 6)}></div>
							</div>
							<div className="linha2">
								<div className="fonte1" onClick={()=>this.mudaFonte(i, 1)}>A</div>
								<div className="fonte2" onClick={()=>this.mudaFonte(i, 2)}>A</div>
								<div className="fonte3" onClick={()=>this.mudaFonte(i, 3)}>A</div>
								<div className="fonte4" onClick={()=>this.mudaFonte(i, 4)}>A</div>
								<div className="fonte5" onClick={()=>this.mudaFonte(i, 5)}>A</div>
								<div className="fonte6" onClick={()=>this.mudaFonte(i, 6)}>A</div>
							</div>
						</div>
						<textarea type='text' ref={this.setRefTextArea} onChange={this.handleClick} id={i} key={i} value={this.state.valores[{i}]} />
					</div>
				   </Draggable>);
	
	}
	

		return(
			<>
			
        <Menu />
		<Container>
				<div className="tela" ref={this.setRefTela}>
					<br />
					
					<div className="iconeAdd"  title="Adicionar nota" onClick={this.telaFunction} >
						<i className="plus icon"></i>
					</div>
					
					<div className="totalizacao">
					{/*Total: {po}*/}
					</div>
					
					<br/>
					<hr/>
					
					<div className="conteudo">
						{divs}
					</div>
						

					
				</div>
			</Container>	
				
			</>
		)
	}
}
