/* Dependencies */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');
const SocketServer = require('./js/Server/Communication/SocketServer');

/* Initialization */
const app = express();
const server = http.Server(app);

/* Routes */
const apiRoutes = require("./js/Server/Communication/Routes/Api");
const staticRoutes = require("./js/Server/Communication/Routes/Static");

/* Session Middleware */
var sessionMiddleware = session({   
    secret: 'fcPKZ1Cc9xloGLtGE3Pvg5i44bUFyedAM6MeziORpWcJpuBYIhFTxwCnKHCz',
    saveUninitialized: false,
    resave: false,
});

/* Middleware for restricted routes */
const restricted = function(req, res, next) {
    var isLoggedIn = req.session.user instanceof Object;
    var isLoginCall = req.path === "/login" || req.path === "/api/login";
    var isLoginPagePath = 
        req.path.startsWith("/css") ||
        req.path.startsWith("/js/plugins/") ||
        req.path.startsWith("/js/Client");

    if (isLoggedIn && isLoginCall) {
        res.redirect('/');
    } else if (isLoggedIn || isLoginCall || isLoginPagePath) {
        next();
    } else {
        res.redirect('/login');
    }
}

/* Body parser configuration */
app.use(bodyParser.json());

/* Setting session middleware to Express */
app.use(sessionMiddleware);

/* Setting routes */
app.use("/api", restricted, apiRoutes);
app.use("/", restricted, staticRoutes);

/* Express Initialization */
server.listen(8081, function() {
    console.log(`[SERVER] New connection opened in port ${server.address().port}.`);
});

/* Socket IO Initialization */
const io = socketio.listen(server);

/* Setting session middleware to SocketIO */
io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

/* Socket Server Initialization */
new SocketServer(io).init();