const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log('Run task by request')
  
    res.status(200).json({
      message: 'Server response message'
    });
  });
  
  app.post('/hook', (req, res) => {
    console.log('Trap Receiver', req.body)
  
    res.sendStatus(200)
  });
  
  app.listen(PORT, () => {
    console.log(`Server start on port: ${PORT}`)
  })