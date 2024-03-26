import asyncHandler from 'express-async-handler'
import Event from '../models/eventModel.js'
import { cloudinary } from '../utils/cloudinary.js'

const createEvent = asyncHandler(async(req, res) => {

  const {name, category, organization, startDate, location, price, numTickets, description} = req.body
  let cloudinaryImage = {}
  await cloudinary.uploader.upload(
    req.body.image,
    {allowed_formats:['png','jpg','jpeg']},
    (err, result)=>{
      if(err) console.log(err)
      cloudinaryImage = result.secure_url
    })

  if(name){
    const event = new Event({
      name,
      category,
      organization,
      image: cloudinaryImage,
      startDate,
      location,
      price,
      numTickets,
      description
    })
    const newEvent = await event.save()
    res.status(201).json(newEvent)
  } else {
    res.status(400)
    throw new Error('Invalid event data')
  }
})

export {createEvent}