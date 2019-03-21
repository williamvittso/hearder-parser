const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// app.get('/',(req,res) => {
//     res.sendFile(`${__dirname}/views/index.html`)
// })

// app.use(express.static(`${__dirname}/public`))

app.get('/api/whoami', (req,res) => {
    console.log(req);
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    res.json({
        ipaddress: ip.split(',')[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split(/[\(\)]/)[1]
    }) 
})

// app.use((req,res) => {
//     res.sendFile(`${__dirname}/views/404.html`,404)
// })

app.listen(port,console.log(`listening ${port}`))