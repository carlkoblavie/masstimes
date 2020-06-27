import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Register from './register'
const regModal = ({ day, time }) => (
  <Modal
    closeIcon
    trigger={
      <Button success color="green">
        Register
      </Button>
    }
  >
    <Modal.Header>
      <span style={{ color: 'green' }}>
        Mass: {day} {time}
      </span>
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Kindly fill the form to register for this service</Header>
        <Register />
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default regModal
