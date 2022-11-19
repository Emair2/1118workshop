const express = require('express')
const app = express()
const port = process.argv[2] || 80
//do the port thing

const emair = express.static(`${__dirname}/emair`)
app.use(emair)

app.listen(port, () => {
    console.log(`running the server on the port 80! visit http://localhost:${port}`)
})
