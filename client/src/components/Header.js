import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
const HeaderContainer = (props) => (
  <div>
    <Menu>
      <Menu.Item content='Star Wars' />
      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <Input icon='search' placeholder='Search...'
                   onChange={props.onSearchChange} />
          </div>
          <div className='results'></div>
        </div>
      </Menu.Menu>
    </Menu>
    {props.children}
  </div>
)

export default HeaderContainer
