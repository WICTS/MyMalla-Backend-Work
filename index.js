 
  const express=require('express')
  const connectToDb = require('./config/db')
  
  const app=express()

  const userRouter=require('./routes/route')
  const cors=require('cors')

  connectToDb()
  const port=2000

  app.use(cors())

  app.use(express.json())

  app.use('/api',userRouter)
app.use('/',(req,res)=>{
    res.send('welcome to home page')
})

  app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
  })


  