import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const Password = () => (
  <Segment inverted basic textAlign={"center"}>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Old Password' placeholder='Old Password' />
        <Form.Input fluid label='New Password' placeholder='New Password' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default Password