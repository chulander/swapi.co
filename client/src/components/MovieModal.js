import React from 'react'
import { Button, Modal, Card ,Dimmer,Loader} from 'semantic-ui-react'
import MovieCard from './MovieCard'
const MovieModal = (props) => {
  return <Modal size='large' open={props.modalOpen}
                onClose={() => props.toggleModal(false)}>
    <Modal.Header>
      Movies including the character "{props.activeCharacter ? props.activeCharacter.name : ''}"
    </Modal.Header>
    <Modal.Content>
      <Card.Group>
        {props.loadingMovies
          ? <Dimmer active={props.loadingMovies}>
            <Loader>Loading Movies</Loader>
          </Dimmer>
          : props.activeFilms
            ? props.activeFilms.map(
              film => <MovieCard key={film.url} {...film} />)
            : undefined
        }
      </Card.Group>
    </Modal.Content>
    <Modal.Actions>
      <Button content='close' labelPosition='right'
              onClick={() => props.toggleModal(false)}>
      </Button>
    </Modal.Actions>
  </Modal>

}

export default MovieModal