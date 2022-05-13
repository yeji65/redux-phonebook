import React, { useState } from 'react'
import {Form,Row,Col} from 'react-bootstrap'

const SearchBox = () => {
   

  return (
      <Form >
        <Row>
        <Col lg={10}>
        <Form.Control type="text" placeholder='이름을 입력해주세요' />
        </Col>
        <Col lg={2}>
        <button type="submit" >Search</button>
        </Col>
        </Row>
    </Form>
  )
}

export default SearchBox