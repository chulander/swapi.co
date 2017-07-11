import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
class HeaderContainer extends Component {

  render () {
    return (
      <div>
        <Menu>
          <Menu.Item content='Star Wars'/>
          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search characters...' />
                <i className='search link icon' />
              </div>
              <div className='results'></div>
            </div>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}

export default HeaderContainer
