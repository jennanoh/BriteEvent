import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import organizerRoutes from './routes/organizerRoutes.js'
import path from 'path'

const app = express()
dotenv.config()


app.use(express.json({ limit: "50mb" })) //data from FE will be converted to json

app.use('/api/events', eventRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.use('/api/organizer', organizerRoutes)

app.get('/api/config/paypal', (req, res) => 
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve() //directory
if (process.env.NODE_ENV === 'production'){ //if in production mode
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'))
  })
}

app.use(errorHandler)
const port = process.env.PORT
connectDB().then(() =>{
  app.listen(port, console.log(`Server is running on port ${port}`))
})