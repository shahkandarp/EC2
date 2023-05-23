const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.status(200).json({res:'Success',data:"Finaly learned EC2"})
})

app.listen(3001,()=>{
  console.log('Server is listening on port 3001')
})
