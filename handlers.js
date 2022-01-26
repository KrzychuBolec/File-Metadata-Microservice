
require('express')
require('multer')

let getHomepage = (req,res) => {
    res.sendFile(__dirname+"/public/index.html")
}



let analyseFile = (req,res) =>{
    res.send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
}






module.exports = {
    getHomepage,
    analyseFile
}