/**
 * Created by mtime on 15/7/3.
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }


    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });


    cluster.on('fork', function (worker) {
        //worker.id
        console.log(worker.process.pid +' is fork');
    })

    //online is after fork
    cluster.on('online', function (worker) {
        console.log(worker.process.pid +'is online');
    })

    cluster.on('listening', function (worker,address) {
            console.log(worker.process.pid +' is listening');
    })

    cluster.on('disconnect', function(worker) {
        console.log('The worker #' + worker.id + ' has disconnected');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker %d died (%s). restarting...',
            worker.process.pid, signal || code);
        cluster.fork();
    });

    process.on('exit', function(code) {
        // do *NOT* do this
        setTimeout(function() {
            console.log('This will not run');
        }, 0);
        console.log('About to exit with code:', code);
    });

    process.on('uncaughtException', function(err) {
        console.log('Caught exception: ' + err);
    });

} else {
    // Workers can share any TCP connection
    // In this case its a HTTP server
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}