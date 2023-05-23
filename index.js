const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.status(200).json({res:'Success'})
})

app.listen(3001,()=>{
  console.log('Server is listening on port 3001')
})
