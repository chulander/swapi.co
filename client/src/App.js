/* global fetch:false */
import React, { Component } from 'react'
import './App.css'
import Characters from './components/Characters'
import Header from './components/Header'
import MoviesModal from './components/MovieModal'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      characters: [],
      modalOpen: false,
      activeCharacter: undefined,
      activeFilms: undefined,
      loadingCharacters: false,
      loadingMovies: false,
      filteredValue: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.activateCharacter = this.activateCharacter.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  toggleModal (modalStatus) {
    this.setState({
      modalOpen: typeof modalStatus !== 'undefined'
        ? modalStatus
        : !this.state.modalOpen
    })
  }

  activateCharacter (data, filmDetails) {
    this.setState({
      activeCharacter: data,
      modalOpen: true,
      activeFilms: filmDetails
    })
  }

  recursiveApiFetch (url) {
    return fetch(url, {method: 'GET'}).
    then(response => response.json()).
    then(data => {
      return data.next
        ? this.recursiveApiFetch(data.next).
        then(newData => [...newData, ...data.results])
        : data.results
    }).
    catch(err => {
      console.log('error', err)
    })
  }

  onSearchChange (e, {value}) {
    console.log('onSearchChange:value', value)
    this.setState({
      filteredValue: String.prototype.toLowerCase.call(value)
    })
  }

  componentDidMount () {
    this.setState({
      loadingCharacters: true
    })
    this.recursiveApiFetch('http://swapi.co/api/people').then(data => {
      this.setState({
        characters: data,
        loadingCharacters: false
      })
    }).catch(err => {
      console.error(`recursive people fetch error`, err.stack)
    })
  }

  render () {
    console.log('what is this.state', this.state)
    return (
      <div>
        <Header {...this.props} onSearchChange={this.onSearchChange}>
          <Characters {...this.props}
                      characters={this.state.characters}
                      toggleModal={this.toggleModal}
                      activateCharacter={this.activateCharacter}
                      loadingCharacters={this.state.loadingCharacters}
                      filteredValue={this.state.filteredValue}

          />
        </Header>
        <MoviesModal {...this.props}
                     toggleModal={this.toggleModal}
                     modalOpen={this.state.modalOpen}
                     activeCharacter={this.state.activeCharacter}
                     activeFilms={this.state.activeFilms}
                     loadingMovies={this.state.loadingMovies}
        />

      </div>
    )
  }
}

export default App
