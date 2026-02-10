import http from 'http'


const app = http.createServer()

const PORT = 7000

app.listen(PORT,()=>{

    console.log(`Server is on: in the http://localhost:${PORT}`);
    

})