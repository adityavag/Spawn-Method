const  express = require('express');
const app = express();
const PORT = 3000;
const { spawn } = require('child_process');

app.get('/',function(req,res){
    const process = spawn('python', ["./main.py", 12,13]);
    process.stdout.on('data', (data)=>{
        console.log(`${data}`)
    })
    res.send("Hello")
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))