const express=  require('express')
const app = express()
const port = 5000
app.get('/apple ,(reg,res)'=>{
    res.send('apple is red in color')
})
app.listen(port , ()=> {
    console.log("server running ")
})