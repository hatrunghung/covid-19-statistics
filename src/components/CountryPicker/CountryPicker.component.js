import React from 'react'
import { Form } from 'react-bootstrap'

function CountryPicker() {
  return (
    <Form>
      <Form.Group controlId='CountryPicker.Select'>
        <Form.Label>Select Country</Form.Label>
        <Form.Control as="select">
          <option></option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default CountryPicker