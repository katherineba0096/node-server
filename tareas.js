const http = require ("http");
const port = 3000;

const tareas = require ('./tareas.json')


const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url === '/tareas') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tareas));

    }

})


server.listen(port,()=>{
    console.log(`Servidor inicializado en el puerto ${port}`)
})