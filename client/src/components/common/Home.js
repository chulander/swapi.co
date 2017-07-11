import React, { Component } from 'react'
import {
  Button,
  Card,
  Container,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
const GroupCard = (props) => {
  console.log('what is props', props)
  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini'
               src={props.photo} />
        <Card.Header>
          {props.name}
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

class People extends Component {
  constructor (props) {
    console.log('what is props', props)
    super(props)
    this.state = {
      people: []
    }
    this.recursiveApiFetch=this.recursiveApiFetch.bind(this)
  }


  recursiveApiFetch (url) {
    return fetch(url, {method: 'GET'}).
    then(response => response.json()).
    then(data => {
      if (data.next) {
        return this.recursiveApiFetch(data.next).then(newData => {
          return [...newData, ...data.results]
        })
      }
      else {
        return data.results
      }
    }).
    catch(err => {
      console.log('error', err)
    })
  }

  componentDidMount () {
    this.recursiveApiFetch('http://swapi.co/api/people')
    .then(data=>{
      this.setState({people:data})
    })
    .catch(err=>{
      console.error(`recursive people fetch error`, err.stack)
    })
    // fetch(`http://swapi.co/api/${'people'}`, {method: 'GET'}).
    // then(response => response.json()).
    // then(data => {
    //   console.log('frontend data', data)
    //   this.setState({people:data.results})
    // }).
    // catch(err => {
    //   console.log('error', err)
    // })
  }

  render () {
    console.log('players: what is this.state', this.state)
    console.log('players: what is this.props', this.props)
    return (
      <Container>
        <Header as='h2'>Characters</Header>
        <Card.Group>
          {this.state.people.map(person => {
              console.log('what is person', person)
              return (<GroupCard key={person.url} {...person} />)
            }
          )}
        </Card.Group>
      </Container>

    )
  }
}

export default People

