const express = require('express')
const app = express()
const port = 5000

const fs = require('fs');



app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/quizmenu', (req, res) => {
    let rawdata = fs.readFileSync('quizMenu.json');
    res.status(200).json(JSON.parse(rawdata))
})


app.get('/api/quiz/:id', (req, res) => {
    let rawdata = fs.readFileSync(`quiz${req.params.id}.json`);
    res.status(200).json(JSON.parse(rawdata))
})


app.post('/post', (req, res) => {
    console.log(req.body)
    res.status(200).json({mesage: "xyuecoc"})
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})