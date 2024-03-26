import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FloatingLabel, Image, InputGroup, Button} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { Link, useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import NumericInput from 'react-numeric-input'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '../actions/organizerActions'
import Message from '../Components/Message'


const CreateEventScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [organization, setOrganization] = useState()
  const [eventImage, setEventImage] = useState()
  const [imageBase64, setImageBase64] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [location, setLocation] = useState()
  const [price, setPrice] = useState()
  const [numTickets, setNumTickets] = useState(0)
  const [description, setDescription] = useState()
 
  const eventCreate = useSelector((state) => state.eventCreate)
  const {success, newEvent, error} = eventCreate

  useEffect(()=>{
    if (success){
      navigate(`/event/${newEvent._id}`)
    }
  },[navigate, success, newEvent])

  const setFileToBase64 = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageBase64(reader.result)
    }
  }
  const handleChange = (e) => {
    const file = e.target.files[0]
    setEventImage(URL.createObjectURL(file))
    setFileToBase64(file)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createEvent({
      name, category, organization, startDate, image:imageBase64, location, price, numTickets, description
    }))
  }

  return (
    <Container className='mb-5'>
      <Link className='btn btn-light my-3' to='/'>
        {'< Back to Events'}
      </Link>
      <Form onSubmit={submitHandler}>
        <Row className="justify-content-md-center">
        <Col sm={8}>
          <h2 className='mb-4'>Create an Event</h2>
          <h6>What's the name of your event?</h6>
          <fine>This will be your event's title. Be clear and descriptive with a title that tells people what your event is about. e.g. Art Gallery Event: Come Display Your Work - Try to be specific!</fine>
          <Form.Group controlId='name' className='mt-2 mb-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="Event title"
            >
              <Form.Control
                type='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>Event Category:</h6>
          <fine>What category does your event fall under? This will help promote your event to those searching for events like yours.</fine>
          <Form.Select className='mt-2 mb-3' aria-label="Default select example" value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option></option>
            <option value="music">Music</option>
            <option value="nightlife">Nightlife</option>
            <option value="visualarts">Visual Arts</option>
            <option value="holidays">Holidays</option>
            <option value="health">Health</option>
            <option value="hobbies">Hobbies</option>
            <option value="business">Business</option>
            <option value="food&drink">Food & Drink</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>Organization Name:</h6>
          <fine>What is the name of the person or organization that is hosting this event?</fine>
          <Form.Group controlId='organization' className='mt-2 mb-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="Organization"
            >
              <Form.Control
                type='text'
                value={organization}
                onChange={(e)=> setOrganization(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>Add an image:</h6>
          <Form.Group controlId='eventImage' className='my-3'>
            <Form.Control type='file' custom onChange={handleChange}/>
          </Form.Group>
          {eventImage && <Image src={eventImage} alt='eventImage' thumbnail/>}
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>What time will your event start?</h6>
          <fine>Please select the day and time should your guests arrive
          <span className='center-date mb-3'><DatePicker
            selected={startDate}
            onChange={(e) => setStartDate(e)}
            showTimeSelect
            dateFormat="Pp"
          /></span>
          </fine>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>Where will your event take place?</h6> 
          <Form.Group controlId='location' className='mt-2 mb-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="Location"
            >
              <Form.Control
                type='text'
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>How much is your event?</h6>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control 
              aria-label="Amount (to the nearest dollar)"
              type='number'
              value={price}
              onChange={(e)=> setPrice(e.target.value)} />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>Event capacity:</h6>
          <fine>How many people in total can attend your event?</fine>
          <Form.Group controlId='location' className='mt-2 mb-3'>
            <NumericInput
              min={0}
              value={numTickets}
              selected={numTickets}
              onChange={(e) => setNumTickets(e)}
            ></NumericInput>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8}>
          <h6>About this event:</h6>
          <fine>Use this section to provide more information about your event. You can include things to know, venue information, parking, accessibility options - anything that will help people know what to expect.</fine>
          <Form.Group controlId='description' className='mt-2 mb-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="Description"
            >
              <Form.Control
                type='text'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col sm={8} className='d-flex align-items-end flex-column'>
          {error && <Message variant='danger'>{error}</Message>}
          <Button type ='submit' style={{backgroundColor:'#d1410c', borderColor:'#d1410c'}}>
            Create Event
          </Button>
        </Col>
      </Row>
      </Form>
    </Container>
  )
}


export default CreateEventScreen