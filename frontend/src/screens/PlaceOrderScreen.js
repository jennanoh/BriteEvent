import React, { useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../actions/orderActions'
import Message from '../Components/Message'

const PlaceOrderScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ticket = useSelector((state) => state.ticket) 
  const updatedTicket = {} 

  const addDecimals = (num) =>{
    return (Math.round(num * 100)/100).toFixed(2)
  }
  updatedTicket.itemsPrice = addDecimals(
    ticket.tickets.price*ticket.tickets.qty
  )
  updatedTicket.taxPrice = addDecimals(Number((0.15 * updatedTicket.itemsPrice).toFixed(2))) //tax will be 15%

  updatedTicket.totalPrice = (
    Number(updatedTicket.itemsPrice) +
    Number(updatedTicket.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const {order, success, error} = orderCreate

  useEffect(()=> {
    if (success) {
      navigate(`/order/${order._id}`) //if order has already been made...
    }
  },[navigate, success, order])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: ticket.tickets,
        paymentMethod: ticket.paymentMethod,
        taxPrice: updatedTicket.taxPrice,
        totalPrice: updatedTicket.totalPrice,
      })
    )
  }
  return (
    <>
    <Modal       
      show={props.showModal} 
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="conatained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
          <h4 className='modal-title w-100 text-center'>Order Summary</h4>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant='flush'>
          <ListGroup.Item className='border-0'>
            <h6>{ticket.tickets.name}</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>{ticket.tickets.qty} x General Admission</Col>
              <Col>${updatedTicket.itemsPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Tax</Col>
              <Col>${updatedTicket.taxPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className='border-0'>
            <Row>
              <Col><strong>Total</strong></Col>
              <Col><strong>${updatedTicket.totalPrice}</strong></Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            {error && <Message variant='danger'>{error}</Message>}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
        <Modal.Footer>
          <Button onClick={placeOrderHandler} disabled={ticket.tickets.qty === 0}>
            Continue
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default PlaceOrderScreen
