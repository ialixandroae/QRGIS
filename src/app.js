const cluster = require('cluster');

if (cluster.isMaster) {
    // Count the machine's CPUs
    const cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
    // Listen for dying workers
    cluster.on('exit', function (worker) {
        // Replace the dead worker,
        // we're not sentimental
        console.log('Worker %d died :(', worker.id);
        cluster.fork();

    });
// Code to run if we're in a worker process
} else {
    const express = require('express');
    const bodyParser = require('body-parser');
    const morgan = require('morgan');
    const path = require('path');
    const cors = require('cors');
    const app = express();
    
    const helmet = require('helmet');
    const globalPath = path.join(__dirname, "../");
    
    // Use this when developing on Windows
    // require('dotenv').config();
    
    // Use this when deploy to VM
    require('dotenv').config({path: path.join(globalPath, '.env')});
    const port = process.env.IP;

    app.use(morgan(':date[web]'));
    app.use(morgan('dev'));
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true 
    }));
    app.use(helmet());
    app.use(cors({origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://127.0.0.1:8081']}));

    app.use(express.static(__dirname + "/public"));
    app.use(express.static(__dirname + "/maps"))
    app.use(require('./routes/controller'));

    app.listen(port, () => {
        console.log("APP IS RUNNING ON PORT " + port);
    });
}