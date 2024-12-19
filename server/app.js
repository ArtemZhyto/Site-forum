const fs = require('fs')
const express = require('express')
const https = require('https')
const router = require('./routes/routes.js')
const {
  PORT,
  SETTINGS
} = require('./config/config.js')

const package = fs.readFileSync('./package.json', 'utf-8')
const packageObj = JSON.parse(package)

const app = express()

app.use(router)

https
  .createServer(SETTINGS, app)
  .listen(PORT, () => {
    console.log(`Server started work on ${PORT} port`)
    console.log(`Version -  ${packageObj.version}`)
  })