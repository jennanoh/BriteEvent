import Event from '../Components/Event';
import { Container, Col, Row } from 'react-bootstrap'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {eventActions} from '../actions/eventActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { Link } from 'react-router-dom';

const Music = () => {

  const dispatch = useDispatch()
  
  useEffect( () => {
    dispatch(eventActions())
  },[dispatch])

  const eventsList = useSelector((state) => state.eventsList)
  const {loading, events, error} = eventsList

  const musicEvents = events.filter(e=>(e.category === "music"))
  return (
    <>
      {loading? (<Loader />) : 
        error? (<Message variant='danger'> {error} </Message>):
      (
        <Container fluid="xxl" className="px-md-5">
          <Link className='btn btn-light my-3' to='/'>
            {'< Back to Events'}
          </Link>
              <h3 className='mt-3'>All Music Events:</h3>   
              <Row className='mx-3'>
                  {musicEvents.map (e => (
                  <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
                    <Event event={e} />
                  </Col>
                  ))
                  }
              </Row>
        </Container>
      )
    }
  </>
  
  )
}

export default Music