const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000
var tasks = [{title:'Tytuł',description:'Opis',status:0}]
app.get("/gettask",function(req,res){
    res.json(tasks)
})
app.get("/addtask/:title/:description",function(req,res){
    const title = req.params.title
    const description = req.params.description
    const tmp_msg = {'title':title,'description':description,'status':0}
    tasks.push(tmp_msg)
    res.send("dodano")
})
app.listen(port)