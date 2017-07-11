import React from 'react'
import { Card, Container, Dimmer, Header, Loader } from 'semantic-ui-react'
import CharacterCard from './CharacterCard'

const Characters = (props) => (
  <Container>
    <Header as='h2'>Characters</Header>
    <Card.Group>
      {
        props.loadingCharacters
          ? <Dimmer active={props.loadingCharacters}>
          <Loader>Loading Characters</Loader>
        </Dimmer>
          : props.characters.filter(character => character.name.toLowerCase().
        includes(props.filteredValue)).
        map(person => {
            return (
              <CharacterCard
                key={person.url}
                {...props}
                {...person} />
            )
          }
        )
      }
    </Card.Group>
  </Container>
)

export default Characters
