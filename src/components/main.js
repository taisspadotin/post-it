import React from 'react';
import pag1 from './pag1';
import Inicio from './pagina_inicial/inicio';
import {Switch, Route} from 'react-router-dom';
import Listagem from './pagina_inicial/listagem';
import Home from './home/home';
import Pesquisar from './pesquisar/pesquisar';
import Adicionar from './adicionar/adicionar';
import Desenhar from './desenhar/desenhar';
import TelaInicial from './inicio/inicio';

const Main = () =>(
	<Switch>
		<Route exact path="/" component={TelaInicial} />
		<Route  path="/cadastro" component={Inicio} />
		<Route  path="/list" component={Listagem} />
		<Route  path="/pesquisar" component={Pesquisar} />
		<Route  path="/adicionar" component={Adicionar} />
		<Route  path="/desenhar" component={Desenhar} />
		<Route  path="/home" component={Home} />
	</Switch>
)
export default Main;
