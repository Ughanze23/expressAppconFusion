const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("Sending details of promotions");
})
.post((req,res,next) => {
    res.end("adding details of promotion with name "+ req.body.name + " and description "+ req.body.description);
})
.put((req,res,next) => {
    res.end("PUT opperation not supported on /promotions");
})
.delete((req,res,next) => {
    res.end("Deleting details of promotion with name "+ req.body.name + " and description "+ req.body.description);
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("Sending details of promotion: " + req.params.promoId);
})
.post((req,res,next) => {
    res.end("adding details of promotion: "+ req.params.promoId);
})
.put((req,res,next) => {
    res.end("Updating the details of promotion: " + req.params.promoId);
})
.delete((req,res,next) => {
    res.end("Deleting details of promotion: "+ req.params.promoId );
});


module.exports = promoRouter;