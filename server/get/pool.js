const {Pool} = require('pg')

const pool = new Pool({
  user:"postgres",
  host:"localhost",
  password:"Sev9",
  database:"music",
  port: 5432,
})

module.exports = () => pool