//Constants of installed libraries
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

//Use of these constants
const routes = require('./config/routes')
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(21262, () => {console.log("PokeApi started on http://localhost:21262")})