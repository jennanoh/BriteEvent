import express from 'express'
import { createEvent } from '../controller/organizerController.js'

const router = express.Router()

//@desc   Register a new event
//route   POST /api/organizer
//access  Public
router.route('/').post(createEvent)

export default router