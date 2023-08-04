const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
res.send('Hello Express js')
})

app.post('/admin', (req, res) => {
    res.send('Got a POST request')
  })

  app.listen(port, () => {
    console.log(` vish application listening on port ${port}`)
  })


