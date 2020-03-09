import React, {Component, Fragment } from 'react';
import './style.css';
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import _ from 'lodash'
import Menu from '../menu/menu';
import { Container} from 'react-bootstrap';

class Lista extends Component{
		render(){
			return(
				<div className="listagem">
					<h2 style={{border: '1px solid #000', borderBottom:0}}>{this.props.nome}</h2>
					<ul >
						<li style={{border: '1px solid #000'}}>{this.props.idade}</li>
						<li style={{border: '1px solid #000', borderTop:'0'}}>{this.props.tipo}</li>
					</ul>
				</div>
			)
		}
}

export default class Pesquisar extends Component{
	constructor(props){
		super(props)
		this.state ={
			data: [],
			loading: false
		};
	}
	

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }
	componentDidMount(){
		var data = [
		  {
			avatar: '/images/avatar/large/helen.jpg',
			name: 'Butters',
			age: 3,
			type: 'dog'
		  },
		  {
			avatar: '/images/avatar/large/matthew.png',
			name: 'Lizzy',
			age: 6,
			type: 'dog'
		  },
		  {
			avatar: '/images/avatar/large/molly.png',
			name: 'Red',
			age: 1,
			type: 'cat'
		  },
		  {
			avatar: '/images/avatar/large/molly.png',
			name: 'Joey',
			age: 3,
			type: 'dog'
		  },
		];
		this.setState({data});
		
		
	}
	
	render(){
		 const { loading } = this.state
		return(
			<>
			<Menu/>
			<Container>
			<Fragment>
				<Button loading={loading} onClick={this.handleLoadingClick} primary>
				  Simulate loading
				</Button>
				<Divider />
				<Card.Group doubling itemsPerRow={3} stackable>
          {this.state.data.map((row)=> 
            <Card key={row.name}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={row.avatar} style={{width: '100%'}}/>
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{row.name}</Card.Header>
                    <Card.Meta>{row.age}</Card.Meta>
                    <Card.Description>{row.type}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button disabled={loading} primary>
                  Add
                </Button>
                <Button disabled={loading}>Delete</Button>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
			</Fragment>
			{/*<Lista nome={row.name} idade={row.age} tipo={row.type}/>*/}
			</Container>
</>	
			
		)
	}
} 