var express = require('express')
var app = express()
const multer = require('multer')
const handlers = require('./handlers')
const upload = multer({dest: `uploads/`})

const cors = require('cors')

app.use(cors())

app.use("/public",express.static("/public"))

app.get("/",handlers.getHomepage)

app.post("/api/fileanalyse", upload.single('upfile'),handlers.analyseFile)

app.listen(3000,()=>console.log("Server is listeninig on port 3000..."))


