import React, { Component } from 'react'
import { Card, Container, Header , Dimmer, Loader} from 'semantic-ui-react'
import CharacterCard from './CharacterCard'

class People extends Component {




  render () {
    return (
      <Container>
        <Header as='h2'>Characters</Header>
        <Card.Group>
          {
            this.props.loadingCharacters
            ? <Dimmer active={this.props.loadingCharacters}>
              <Loader>Loading Characters</Loader>
            </Dimmer>
              :this.props.characters.map(person => {
                return (<CharacterCard
                  key={person.url}
                  {...this.props}
                  {...person} />)
              }
            )
          }
        </Card.Group>
      </Container>

    )
  }
}

export default People
