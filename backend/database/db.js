const dotenv = require('dotenv')
dotenv.config()
const {DB_URL} = process.env
module.exports = {
  db: DB_URL
}