import React, {useState, useRef} from 'react'
import {Modal, Form, Button, Col} from 'react-bootstrap'
import { Link, useLocation  } from 'react-router-dom'
import  {FormContainer}  from '../Components/FormContainer'
import {login} from '../actions/userActions'
import { useDispatch} from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import CheckoutScreen from '../screens/CheckoutScreen'


export const LoginModalComponent = (props) => {

  const dispatch = useDispatch()
  let showCheckout = useRef(false)
  const location = useLocation()
  const redirect = location.search? location.search.split('=')[1]: '/'

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
    showCheckout.current = true
    toggleCheckoutModal()
    props.closeLoginModal()
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [checkoutModalState, setCheckoutModalState] = useState(false)

  const toggleCheckoutModal = () =>{
    setCheckoutModalState(!checkoutModalState)
  }

 
  return (
    <>
      { showCheckout.current? (<CheckoutScreen  
        showModal={checkoutModalState}
        closeModal={toggleCheckoutModal}
        />) : 
      (<Modal 
        show={props.showLoginModal}
        onHide= {props.closeLoginModal}
        size="xxl"
        aria-labelledby="conatained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Checkout</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormContainer>
              <h1>Sign In</h1>           
              <Form onSubmit={submitHandler}>
                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      value={email}
                      onChange= {(e)=> setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>   
                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter Password'
                      value={password}
                      onChange= {(e)=> setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type='Submit' variant='primary'>
                    Sign In
                  </Button>
              </Form>
              <Col>
               New Customer?{''}
                <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}> {/* include redirect after registration */}
                  Register
                </Link>
             </Col>
            </FormContainer>
        </Modal.Body>
      </Modal> )
    }
  </>
  )
}

export default LoginModalComponent