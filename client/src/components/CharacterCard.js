import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class CharacterCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      films: props.films,
      birth_year: props.name,
      height: props.height,
      hair_color: props.hair_color,
      skin_color: props.skin_color,
      name: props.name
    }
    this.listMovies = this.listMovies.bind(this)
  }

  listMovies () {
    this.props.toggleModal(true)
    Promise.all(this.state.films.map(
      film => fetch(film, {method: 'GET'}).then(res => res.json()))).
    then(filmDetails => {
      this.props.activateCharacter(this.state, filmDetails)
    }).
    catch(err => {
      console.error('what is films error', err.stack)
    })

  }

  render () {
    return (
      <Card onClick={this.listMovies}>
        <Card.Content>
          <Card.Header>
            {this.state.name}
          </Card.Header>
          <Card.Meta>
            Appeared in
            <strong>{this.state.films ? this.state.films.length : undefined}</strong> {this.state.films && this.state.films.length ===
          1 ? 'film' : 'films'}
          </Card.Meta>
          <Card.Description>
            <strong>height</strong>: {this.state.height}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default CharacterCard