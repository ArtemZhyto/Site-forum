const fs = require('fs')

const PORT = 64327
const SETTINGS = {
  key: fs.readFileSync('./config/private-key.key'),
  cert: fs.readFileSync('./config/certificate.crt')
}

module.exports = {
  PORT,
  SETTINGS
}