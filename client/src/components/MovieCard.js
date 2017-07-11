import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment'
class MovieCard extends Component {

  constructor (props) {
    super(props)
    console.log('what is props', props)
    console.log('what is props.release_date', props.release_date)
    // console.log('what is moment convert time', moment().format(props.release_date, 'dddd MMM D YYYY'))
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