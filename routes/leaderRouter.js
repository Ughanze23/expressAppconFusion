const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("Sending details of leaders");
})
.post((req,res,next) => {
    res.end("adding details of leader with name "+ req.body.name + " and description "+ req.body.description);
})
.put((req,res,next) => {
    res.end("PUT opperation not supported on /leaders");
})
.delete((req,res,next) => {
    res.end("Deleting details of leader with name "+ req.body.name + " and description "+ req.body.description);
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("Sending details of leaders: " + req.params.leaderId);
})
.post((req,res,next) => {
    res.end("adding details of Leader: "+ req.params.leaderId);
})
.put((req,res,next) => {
    res.end("Updating the details of leader: " + req.params.leaderId);
})
.delete((req,res,next) => {
    res.end("Deleting details of leader: "+ req.params.leaderId );
});

module.exports = leaderRouter;