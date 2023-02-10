const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

var tasks = [{msg:'test'}]
app.get("/gettask",function(req,res){
    res.json(tasks)
})
app.get("/addtask/:msg",function(req,res){
    const msg = req.params.msg

    const tmp_msg = {'msg':msg}
    tasks.push(tmp_msg)
    res.send("dodano")
})
app.listen(port)