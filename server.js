import  express  from 'express'

const app = express();
const port = 8050;

app.get("/", (req, res) => {
    res.send("First Get Working");
} );

app.listen(port, function(){
    console.log(`server listening on port: ${port}`)
})