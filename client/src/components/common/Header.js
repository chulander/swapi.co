import React, { Component } from 'react'
import { Icon, Menu, Button, Input, Image, Header, Segment} from 'semantic-ui-react'
const routeMappings = {
  home: '/',
  group: '/groups',
  game: '/games',
  user: '/players'
}
const getActiveItemFromRoute = function(location){
  console.log('what is location', location)
  const activeItem = Object.keys(routeMappings).reduce((cur,next)=>{
    console.log('what is routeMappings[next]', routeMappings[next])
    return routeMappings[next]===location ? next : cur
  })
  return activeItem || 'home'
}
class HeaderContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: getActiveItemFromRoute(this.props.location.pathname)
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (e, {name}) {
    this.setState({activeItem: name})
    if (name !== 'sidebar') {
      this.props.history.push(routeMappings[name])
    }
    if (name === 'sidebar') {
      console.log('inside sidebar', this.props)
      this.props.actions.toggleSidebar()
      // console.log('typeof ', typeof this.props.toggleSidebar)
    }

  }

  render () {
    console.log('what is header props', this.props.location.pathname)
    const {activeItem} = this.state
    console.log('what is activeItem', activeItem)
    return (
      <div>
        <Header textAlign='center'>
          Never Fold Pre-Flop
          {
            this.props.isAuthenticated
              ?  `...${this.props.user}`
              :undefined
          }


          <Header.Subheader>
            Your Neighborhood Friendly Poker Stats Tracker
          </Header.Subheader>
        </Header>
        <Menu pointing icon='labeled'>


          <Menu.Item name='home' active={activeItem === 'home'}
                     onClick={this.handleItemClick}>
            <Icon name='home' />
            Home
          </Menu.Item>

          <Menu.Item name='game' active={activeItem === 'game'}
                     onClick={this.handleItemClick}>
            <Icon name='game' />
            Games
          </Menu.Item>
          <Menu.Item name='group' active={activeItem === 'group'}
                     onClick={this.handleItemClick}>
            <Icon name='group' />
            Groups
          </Menu.Item>

          <Menu.Item name='user' active={activeItem === 'user'}
                     onClick={this.handleItemClick}>
            <Icon name='user' />
            Players
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
            <Input icon='search' placeholder='Search...' />
            </Menu.Item>

          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default HeaderContainer