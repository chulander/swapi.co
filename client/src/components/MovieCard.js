import moment from 'moment'
import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
class MovieCard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title:props.title,
      releaseDate: moment(props.release_date).format('dddd, MMM D YYYY'),
      director: props.director,
      description: props.opening_crawl
    }
  }

  render () {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {this.state.title}
          </Card.Header>
          <Card.Meta>
            <p><strong>Release Date: {this.state.releaseDate}</strong></p>
            <p><strong>Director: </strong> {this.state.director}</p>
          </Card.Meta>
          <Card.Description>
            {this.state.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default MovieCard
