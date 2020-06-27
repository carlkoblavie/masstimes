import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const RegForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <label>Phone Numnber</label>
      <input placeholder="Phone Number" />
    </Form.Field>
    <Form.Field>
      <label>Residential Address</label>
      <input placeholder="Residential Address" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
)

export default RegForm
