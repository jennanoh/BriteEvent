import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Icons = () => {
  return (
    <>
    <Container className='mt-4'>
      <Row className='flex-nowrap overflow-x-auto mx-3'>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/music'><i className="fa-solid fa-music py-4" style={{color: 'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/music' className='icon-link'><small>Music</small></Link>
          </Card.Title>
          
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/nightlife'><i className="fa-solid fa-champagne-glasses py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/nightlife' className='icon-link'><small>Nightlife</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='visualarts'><i className="fa-solid fa-palette py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/visualarts' className='icon-link'><small>Visual Arts</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/holidays'><i className="fa-solid fa-calendar-days py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/holidays' className='icon-link'><small>Holidays</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/health'><i className="fa-solid fa-stethoscope py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/health' className='icon-link'><small>Health</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/hobbies'><i className="fa-solid fa-puzzle-piece py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/hobbies' className='icon-link'><small>Hobbies</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/business'><i className="fa-solid fa-user-tie py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title'>
            <Link to='/business' className='icon-link'><small>Business</small></Link>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='icon-card shadow-none'>
          <Button variant='light rounded-circle btn-lg'>
            <Link to='/food&drink'><i className="fa-solid fa-utensils py-4" style={{color:'black'}}></i></Link>
          </Button>
          <Card.Title className='icon-title text-secondary-emphasis'>
            <Link to='/food&drink' className='icon-link'><small>Food & Drink</small></Link>
          </Card.Title>
        </Card>
      </Col>
      </Row>
    </Container>
    </>
  )
}


export default Icons