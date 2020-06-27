import React from 'react'
import {
  Container,
  Divider,
  Header,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import SearchChurch from './searchChurch'
const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          Mass Schedules
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        {/* <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as="h1">Mass Schedules</Header>
      <p>Register and attend mass at a Catholic Church near you.</p>
      <SearchChurch></SearchChurch>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign="center">
        <Divider inverted section />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout
