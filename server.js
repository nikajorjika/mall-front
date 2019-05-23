const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()

/**
 * Serve index.html file on every route
 */
app.use(require('connect-history-api-fallback')())
app.use(serveStatic(path.join(__dirname, '/dist/')))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started: http://localhost:' + port)
