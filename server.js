import express from "express"
import mongoose from "mongoose"
import bookingRoutes from "./routes/bookingRoutes.js"

const app = express()

// Middleware
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb+srv://gtec:gtec@gtecslot.potbq.mongodb.net/?retryWrites=true&w=majority&appName=gtecslot')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Routes
app.use("/api/bookings", bookingRoutes)

app.get("/welcome",(req,res)=>{
    res.send("hello")
})

app.listen("8000",()=>{console.log("server is running..")})